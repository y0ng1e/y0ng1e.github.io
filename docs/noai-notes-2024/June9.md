### Lecture Notes of NOAI Training
##### Day 3, June 9, 2024

#### 1. Dataset

```python
# 自定义 Dataset
def __init__(self,reviews,labels):
    self.reviews=torch.tensor(reviews,dtype=torch.long)
    self.labels=torch.tensor(labels,dtype=torch.float32)

def __len__(self):
    return len(self.reviews)

def __getitem__(self):
    return self.reviews[idx],self.labels[idx]

# 定义 LSTM
def __init__(self,vocab_size,embedding_dim,hidden_dim,output_dim,pad_idx,dropout=0.5):
    super().__init__()
    self.pad_idx=pad.idx
    self.embedding=nn.Embedding(vocab_size,embedding_dim，padding_idx=pad_idx)
    self.lstm=nn.LSTM(
        embedding_dim,
        hidden_dim,
        num_layers=2,
        batch_first=True,
        bidirectional=True,
        dropout=dropout,
    )
    self.fc=nn.Linear(hidden_dim*2,output_dim)
    self.dropout=nn.Dropout(dropout)

def forward(self,text):
    embedded=self.dropout(self.embedding(text))
    lengths=(text!=self.pad_idx).sum(dim=1)
    embedded=pack_padded_sequence(embedded,lengths.cpu(),batch_first=True,enforce_sorted=False)
    packed_output,(hidden,cell)=self.lstm(embedded)
    hidden=self.dropout(torch.cat((hidden[-2,:,:],hidden[-1,:,:]),dim=1))
    return self.fc(hidden).squeeze(1)

# 训练
def train(model,dataloader,optimizer,criterion):
    epoch_loss=0
    epoch_acc=0
    model.train()
    for texts,labels in tqdm(dataloader):
        texts,labels=texts.to(device),labels.to(device)
        optimizer.zero_grad()
        predictions=model(texts)
        loss=criterion(predictions,labels)
        loss.backward()
        optimizer.step()
        epoch_loss+=loss.item()
        epoch_acc+=acc.item()
    return epoch_loss/len(dataloader),epoch_acc/len(dataloader)

# 模型评估
def evaluate(model,dataloader,criterion):
    epoch_loss=0
    epoch_acc=0
    model.eval()
    with torh.no_grad():
        for texts,labels in tqdm(dataloader):
            texts,labels=texts.to(device),labels.to(device)
            predictions=model(texts)
            loss=criterion(predictions,labels)
            acc=binary_accuracy(predictions,labels)
            epoch_loss+=loss.item()
            epoch_acc+=acc.item()
    return epoch_loss/len(dataloader),epoch_acc/len(dataloader)

# 预测
def predict_sentiment(model,sentence,min_len=5):
    model.eval()
    tokenized=word_tokenize(sentence.lower())
    if len(tokenized)<min_len:
        tokenized+=["<pad>"]*(min_len-len(tokenized))
    indexed=[word2idx.get(word,word2idx["unk"]) for word in tokenized]
    tensor=torch.LongTensor(indexed).to(device).unsqueeze(0)
    prediction=torch.sigmoid(model(tensor))
    pred_label=idx2label[1] if prediction.item()>=0.5 else idx2label[0]
    return pred_label
```

#### 2. Lab

```python
def load_data(csv_path="..."):
    txyz=pd.read_csv(csv_path)
    t=np.array(txyz["timestamp"])
    x=np.array(txyz["x"])
    y=np.array(txyz["y"])
    z=np.array(txyz["z"])
    return t,x,y,z

def derivative(t,x,y,z):
    dxdt=(x[1:]-x[:-1])/(t[1:]-t[:-1])
    dydt=(y[1:]-y[:-1])/(t[1:]-t[:-1])
    dzdt=(z[1:]-z[:-1])/(t[1:]-t[:-1])
    return dxdt,dydt,dzdt

def plot2d_data(x,y,img_path):
    fig=plt.figure()
    ax=fig.add_subplot()
    ax.plot(x,y,lw=1,c="dimgrey")
    plt.savefig(img_path,bbox_inches="tight")
    plt.show()
    pla.cla()
    plt.close("all")
```