var __index = {"config":{"lang":["en"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"index.html","title":"Home","text":"<p>Hello. I'm currently taking several courses that provide online web pages and resources.</p> <p>Check all my progress here.</p>"},{"location":"CS15-112/index.html","title":"CS15-112","text":"<p>In this page, I will record all the homeworks and my thinking process on CMU CS25-112 course.</p>"},{"location":"CS15-112/hw1.html","title":"hw1","text":""},{"location":"CS15-112/hw1.html#part-a","title":"Part A","text":""},{"location":"CS15-112/hw1.html#1-distancex1-y1-x2-y2-2-pts","title":"1. distance(x1, y1, x2, y2) [2 pts]","text":"<p>Write the function distance(x1, y1, x2, y2) that takes four int or float values x1, y1, x2, y2 that represent the two points (x1, y1) and (x2, y2), and returns the distance between those points as a float.</p> Python<pre><code>import math\n\ndef distance(x1, y1, x2, y2):\n    print(math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)))\n</code></pre>"},{"location":"CS15-112/hw1.html#2-circlesintersectx1-y1-r1-x2-y2-r2-2-pts","title":"2. circlesIntersect(x1, y1, r1, x2, y2, r2) [2 pts]","text":"<p>Write the function circlesIntersect(x1, y1, r1, x2, y2, r2) that takes 6 numbers (ints or floats) -- x1, y1, r1, x2, y2, r2 -- that describe the circle centered at (x1,y1) with radius r1, and the circle centered at (x2,y2) with radius r2, and returns True if the two circles intersect and False otherwise.</p> Python<pre><code>import math\n\ndef circlesIntersect(x1, y1, r1, x2, y2, r2):\n    dis=math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))\n    if dis&gt;(r1+r2):\n        return False\n    return True\n</code></pre>"},{"location":"CS15-112/hw1.html#3-getinrangex-bound1-bound2-2-pts","title":"3. getInRange(x, bound1, bound2) [2 pts]","text":"<p>Write the function getInRange(x, bound1, bound2) which takes 3 int or float values -- x, bound1, and bound2, where bound1 is not necessarily less than bound2. If x is between the two bounds, just return it unmodified. Otherwise, if x is less than the lower bound, return the lower bound, or if x is greater than the upper bound, return the upper bound.</p> Python<pre><code>import math\n\ndef getInRange(x, bound1, bound2):\n    if bound1&gt;bound2: # Switch\n        t=bound1\n        bound1=bound2\n        bound2=t\n    if x&lt;bound1:\n        return bound1\n    elif x&gt;bound2:\n        return bound2\n    return x\n</code></pre>"},{"location":"CS15-112/hw1.html#4-eggcartonseggs-2-pts","title":"4. eggCartons(eggs) [2 pts]","text":"<p>Write the function eggCartons(eggs) that takes a non-negative integer number of eggs, and returns the smallest integer number of cartons required to hold that many eggs, where a carton may hold up to 12 eggs.</p> Python<pre><code>import math\n\ndef eggCartons(eggs):\n    if int(eggs/12.0)!=eggs/12.0:\n        return int(eggs/12.0)+1\n    return int(eggs/12.0)\n</code></pre>"},{"location":"CS15-112/hw1.html#5-pascalstrianglevaluerow-col-2-pts","title":"5. pascalsTriangleValue(row, col) [2 pts]","text":"<p>Write the function pascalsTriangleValue(row, col) that takes int values row and col, and returns the value in the given row and column of Pascal's Triangle where the triangle starts at row 0, and each row starts at column 0. If either row or col are not legal values, return None, instead of crashing. Hint: math.factorial may be helpful! Also: it may help to read MathIsFun's Pascal's Triangle page, which includes a general discussion, some nice applications, and further down the page a helpful formula.</p> Python<pre><code>import math\n\ndef pascalsTriangleValue(row, col):\n    return math.factorial(row)/(math.factorial(col)*math.factorial(row-col))\n</code></pre>"},{"location":"CS15-112/hw1.html#6-getkthdigitn-k-5-pts","title":"6. getKthDigit(n, k) [5 pts]","text":"<p>Write the function getKthDigit(n, k) that takes a possibly-negative int n and a non-negative int k, and returns the kth digit of n, starting from 0, counting from the right.</p> Python<pre><code>import math\n\ndef getKthDigit(n, k):\n    while k&gt;0:\n        n=math.floor(n/10)\n        k-=1\n    return n%10\n</code></pre>"},{"location":"CS15-112/hw1.html#7-setkthdigitn-k-d-5-pts","title":"7. setKthDigit(n, k, d) [5 pts]","text":"<p>Write the function setKthDigit(n, k, d) that takes three integers -- n, k, and d -- where n is a possibly-negative int, k is a non-negative int, and d is a non-negative single digit (between 0 and 9 inclusive). This function returns the number n with the kth digit replaced with d. Counting starts at 0 and goes right-to-left, so the 0<sup>th</sup> digit is the rightmost digit.</p> Python<pre><code>import math\n\ndef setKthDigit(n, k, d):\n    is_negative=n&lt;0\n    n=abs(n)\n    n_str=str(n)\n    if k&gt;=len(n_str):\n        n_str='0'*(k-len(n_str)+1)+n_str\n    # Replace the kth digit\n    n_str=n_str[::-1]  # Reverse the string for right-to-left indexing\n    n_str=n_str[:k]+str(d)+n_str[k+1:]  # Replace the kth digit\n    n_str=n_str[::-1]  # Reverse back to normal\n\n    result=int(n_str)\n    if is_negative:\n        result = -result\n    return result\n</code></pre>"},{"location":"NOAI2024-Training/index.html","title":"Lecture Notes of NOAI Training 2024","text":"<ol> <li>June 7, Data Analysis</li> <li>June 8, MNIST &amp; GAN</li> <li>June 9</li> </ol> <p>The test papers for Regional Round of NOAI 2024 is available for download here.</p>"},{"location":"NOAI2024-Training/June7.html","title":"June7","text":""},{"location":"NOAI2024-Training/June7.html#lecture-notes-of-noai-training","title":"Lecture Notes of NOAI Training","text":""},{"location":"NOAI2024-Training/June7.html#day-1-june-7-2024","title":"Day 1, June 7, 2024","text":""},{"location":"NOAI2024-Training/June7.html#1","title":"1. \u57fa\u7840\u5e93","text":"Python<pre><code>import torch\nimport torch.nn as nn\nimport torch.optim as optim\nimport numpy as np\n\nimport matplotlib.pyplot as plt\nimport matplotlib\n%matplotlib inline\n</code></pre>"},{"location":"NOAI2024-Training/June7.html#2","title":"2. \u968f\u673a\u751f\u6210\u6570\u636e","text":"Python<pre><code>np.random.rand(200,1) # range &gt;0\nnp.random.randn(200,1) # range \u65e0\u9650\u5236\n[:X] # \u5012\u6570 X \u4f4d\n</code></pre>"},{"location":"NOAI2024-Training/June7.html#3-matplotlib","title":"3. matplotlib \u7ed8\u56fe\u51fd\u6570","text":"<p>X\uff1anumpy \u968f\u673a\u6570\u96c6\u5408 Y\uff1a\\(y=2x+1\\) \u83b7\u5f97\u6570\u503c\u96c6\u5408</p> Python<pre><code>def draw_data(X,Y):\n    plt.figure(figsize=(8,6))\n\n    plt.scatter(X,Y,color='blue',label='Data') # \u6563\u70b9\u56fe\n    plt.xlabel('X')\n    plt.ylabel('Y')\n    plt.title('Plot')\n\n    plt.legend()\n    plt.show()\n</code></pre>"},{"location":"NOAI2024-Training/June7.html#4","title":"4. \u8bad\u7ec3\u7ebf\u6027\u56de\u5f52\u6a21\u578b","text":"<p>\u6d41\u7a0b\uff1a</p> <ol> <li>\u6570\u636e\u9884\u5904\u7406\uff0c\u8f6c\u53d8\u4e3a tensor</li> <li>\u56fa\u5b9a\u968f\u673a\u79cd\u5b50</li> <li>\u5b9a\u4e49\u7ebf\u6027\u56de\u5f52\u6a21\u578b</li> <li>\u5b9a\u4e49\u635f\u5931\u51fd\u6570 MSE \u548c\u4f18\u5316\u5668 SGD</li> <li>\u8bad\u7ec3\u6a21\u578b\uff0c\u5171 100 \u4e2a epoch</li> <li>\u6bcf\u4e2a epoch \u8bb0\u5f55\u4e0b loss\uff0cweight \u548c bias\uff0c\u5206\u522b\u5b58\u653e\u5728\u5217\u8868\u4e2d</li> </ol> Python<pre><code># \u5b9a\u4e49\u7ebf\u6027\u56de\u5f52\u6a21\u578b\ndef __init__(self):\n    super(LinearRegressionModel,self).__init__()\n    self.linear=nn.Linear(1,1)\n\n# \u8bad\u7ec3\u51fd\u6570\nfor epoch in range(100):\n    model.train()\n    optimizer.zero_grad()\n\n    outputs=model(X_tensor)\n    loss=criterion(outputs,Y_tensor)\n\n    loss.backward()\n    optimizer.step()\n\n    losses.append(loss.item())\n    w_values.append(model.linear.weight.item())\n    b_values.append(model.linear.bias.item())\n    if epoch%10==0:\n        print(f'Epoch {epoch}, Loss: {loss.item()}')\n\n# \u5b9e\u73b0\u6d41\u7a0b\n\n## \u8f6c\u6362\u5f20\u91cf\nX_tensor=torch.tensor(X,dtype=torch.float32)\nY_tensor=#...\n\n## \u56fa\u5b9a\u968f\u673a\u79cd\u5b50\nset_seed(42)\n\n## \u5b9a\u4e49\u635f\u5931\u51fd\u6570\u548c\u4f18\u5316\u5668\ncriterion=nn.MSELoss()\noptimizer=optim.SGD(model.parameters(),lr=0.1)\n\n## \u8bad\u7ec3\u6a21\u578b\u5e76\u8bb0\u5f55\u635f\u5931\u503c\u548c\u53c2\u6570\u53d8\u5316\nlosses,w_values,b_values=train(model,optimizer,criterion,X_tensor,Y_tensor)\n\n# \u7ed8\u5236\u66f2\u7ebf\u56fe\n\ndef draw_loss(losses):\n    plt.figure(figsize=(8,6))\n    plt.plot(range(1,len(losses)+1),losses,color='blue',linestyle='-',linewidth=2)\n    plt.xlabel('Epoch')\n    plt.ylabel('Loss')\n    plt.title('Loss Iteration')\n    plt.show()\n</code></pre> \\[ \\text{MSE Expression Format: }\\text{MSE}(w,b)=\\dfrac{1}{N}\\sum^{N}_{i=1}(y_i-(wx_i+b))^2 \\] Python<pre><code>def draw_loss_contour (X, Y, w_values, b_values, w_true, b_true);\nplt. figure(figsize=(10, 6))\nw_min, w_max = [0, 3]\nb min, b_max = [0, 2.5]\nW_range = np.linspace(w_min, w_max, 100)\nb\n_range = np.linspace(b_min, b max, 100)\nW, B = np.meshgrid(w_range, b_range)\n\n# \u8ba1\u7b97\u6bcf\u4e2a\u7f51\u683c\u70b9\u7684\u635f\u5931\nL = np.zeros (W. shape)\nfor i in range (w. shape[0]) :\nfor j in range(w. shape[1]) :\nw_ij = W[i, j]\nb_ij = B[i, j]\nZ[i, j] = np.mean((Y - (w_ij* X + b_ij)) ** 2)\n\n# \u7ed8\u5236\u7b49\u9ad8\u7ebf\u548c\u53c2\u6570\u53d8\u5316\u8def\u5f84\nplt. contour (W, B, Z, Levels=50) plt. colorbar()\nplt.plot (w_values, b_values, color= red, marker=, linestyle=-, linewidth=2, markersize=s, label= 'Optimized Path')\nplt.scatter(w_values[0], b_values[0], color= black, marker=\u00d7, s=100, label='Initial Point')\nplt.scatter(w_true, b_true, color='black', marker= o, s=100, label='Ref Point')\nplt. xlabel('weight')\nplt. ylabel('Bias')\nplt.title(\"Plot\")\nplt.legend()\nplt.show()\n</code></pre>"},{"location":"NOAI2024-Training/June8.html","title":"June8","text":""},{"location":"NOAI2024-Training/June8.html#lecture-notes-of-noai-training","title":"Lecture Notes of NOAI Training","text":""},{"location":"NOAI2024-Training/June8.html#day-2-june-8-2024","title":"Day 2, June 8, 2024","text":""},{"location":"NOAI2024-Training/June8.html#1-mnist","title":"1. MNIST","text":"Python<pre><code># \u5b9a\u4e49\u6570\u636e\u96c6\ntest_dataset=FashionDataset(\n    datadir='FashionMNIST/raw',\n    transform=T.Compose([\n        T.ToTensor(),\n        T.Normalize((0.5,),(0.5,))\n    ]),\n    is_train=True\n)\n\n# \u5b9a\u4e49\u6d4b\u8bd5\u96c6\ntest_dataset=FashionDataset(\n    datadir='FashionMNIST/raw',\n    transform=T.Compose([\n        T.ToTensor(),\n        T.Normalize((0.5,),(0.5,))\n    ]),\n    is_train=False\n)\n\n# \u7f51\u7edc\u7ed3\u6784\ndef __init__(self):\n    super(LeNet,self).__init__()\n    self.conv1=nn.Conv2d(1,6,5,1,2)\n    self.pool1=nn.MaxPool2d(2,2)\n    self.conv2=nn.Conv2d(6,16,5)\n    self.pool2=nn.MaxPool2d(2,2)\n    self.fc1=nn.Linear(16*5*5,120)\n    self.fc2=nn.Linear(120,84)\n    self.fc3=nn.Linear(84,10)\n\n# \u524d\u5411\u4f20\u64ad\ndef forward(self,x):\n    x=F.relu(self.conv1(x))\n    x=self.pool1(x)\n    x=F.relu(self.conv2(x))\n    x=self.pool2(x)\n    x=x.view(x.size()[0],-1)\n    x=F.relu(self.fc1(x))\n    x=F.relu(self.fc2(x))\n    x=self.fc3(x)\n    return x\n\n# \u8bad\u7ec3\ndef train(epoch):\n    model.train()\n    total_loss=0\n    for iter,(data,target) in enumerate(train_loader):\n        opt.zero_grad()\n        output=model(data)\n        loss=loss_fn(output,target)\n        loss.backward()\n        opt.step()\n        total_loss+=loss.item()\n    total_loss/=len(train_loader)\n    print(f'Epoch: {epoch} Loss: {total_loss:.3f}')\n\n# \u6d4b\u8bd5\ndef test(epoch):\n    model.eval()\n    correct=0\n    tot=0\n    for data,target in test_loader:\n        output=model(data)\n        pred=[]\n        for i in range(output.size(0)):\n            max_index=0\n            max_value=output[i][0]\n            for j in range(1,output.size(1)):\n                if output[i][j]&gt;max_value:\n                    max_value=output[i][j]\n                    max_index=j\n            pred.append(max_index)\n    for i in range(len(pred)):\n        if pred[i]==target[i]:\n            correct+=1\n    tot+=data.shape[0]\nprint(f'Test Epoch: {epoch} Accuracy: {correct/tot*100:.2f}%')\n\n# \u8bad\u7ec3\u6a21\u578b\nfor epoch in range(10):\n    train(epoch)\n    test(epoch)\n</code></pre>"},{"location":"NOAI2024-Training/June8.html#2","title":"2. \u591a\u53d8\u91cf","text":"Python<pre><code># \u8bad\u7ec3\ndef train(epoch):\n    #...\n    #for...\n        output=model(data)\n        output=torch.sigmoid(output)\n\n# \u6d4b\u8bd5\ndef test(epoch):\n    #...\n    #for...\n        output=model(data)\n        output=torch.sigmoid(output)\n        _,output_indices=torch.topk(output,k=2,dim=-1,largest=True,sorted=True)\n        _,target_indices=torch.topk(target,k=2,dim=-1,largest=True,sorted=True)\n        output_indices=output_indices.numpy()\n        output_indices=target_indices.numpy()\n    #for...\n        if np.array_equal(output_indices[i],target_indices[i]):\n            correct+=1\n</code></pre>"},{"location":"NOAI2024-Training/June8.html#3-gan","title":"3. GAN \u751f\u6210\u5bf9\u6297\u7f51\u7edc","text":"<p>\u6d41\u7a0b\uff1a</p> <ol> <li>\u8bbe\u7f6e\u968f\u673a\u79cd\u5b50</li> <li>dataloader</li> <li>\u5224\u522b\u5668\u7f51\u7edc\u7ed3\u6784</li> <li>\u751f\u6210\u5668\u7f51\u7edc\u7ed3\u6784</li> <li>\u5b9e\u4f8b\u5316\u5224\u522b\u5668\u548c\u751f\u6210\u5668</li> <li>\u4f7f\u7528\u672a\u8bad\u7ec3\u7684\u751f\u6210\u5668\u751f\u6210\u6570\u636e\u5e76\u53ef\u89c6\u5316</li> <li>\u8d85\u53c2\u6570</li> <li>\u635f\u5931\u51fd\u6570</li> <li>\u4f18\u5316\u5668\u8bbe\u7f6e</li> <li>\u8bad\u7ec3\u5224\u522b\u5668\u548c\u751f\u6210\u5668</li> <li>\u6a21\u578b\u6d4b\u8bc4</li> </ol> \\[ \\text{nn.Linear}\\leftarrow\\text{2D}\\\\ \\text{nn.Linear}\\rightarrow\\text{nn.ReLU}\\rightarrow\\text{nn.Dropout}\\\\ \\text{nn.Linear 2D}\\rightarrow\\text{1D} \\]"},{"location":"NOAI2024-Training/June9.html","title":"June9","text":""},{"location":"NOAI2024-Training/June9.html#lecture-notes-of-noai-training","title":"Lecture Notes of NOAI Training","text":""},{"location":"NOAI2024-Training/June9.html#day-3-june-9-2024","title":"Day 3, June 9, 2024","text":""},{"location":"NOAI2024-Training/June9.html#1-dataset","title":"1. Dataset","text":"Python<pre><code># \u81ea\u5b9a\u4e49 Dataset\ndef __init__(self,reviews,labels):\n    self.reviews=torch.tensor(reviews,dtype=torch.long)\n    self.labels=torch.tensor(labels,dtype=torch.float32)\n\ndef __len__(self):\n    return len(self.reviews)\n\ndef __getitem__(self):\n    return self.reviews[idx],self.labels[idx]\n\n# \u5b9a\u4e49 LSTM\ndef __init__(self,vocab_size,embedding_dim,hidden_dim,output_dim,pad_idx,dropout=0.5):\n    super().__init__()\n    self.pad_idx=pad.idx\n    self.embedding=nn.Embedding(vocab_size,embedding_dim\uff0cpadding_idx=pad_idx)\n    self.lstm=nn.LSTM(\n        embedding_dim,\n        hidden_dim,\n        num_layers=2,\n        batch_first=True,\n        bidirectional=True,\n        dropout=dropout,\n    )\n    self.fc=nn.Linear(hidden_dim*2,output_dim)\n    self.dropout=nn.Dropout(dropout)\n\ndef forward(self,text):\n    embedded=self.dropout(self.embedding(text))\n    lengths=(text!=self.pad_idx).sum(dim=1)\n    embedded=pack_padded_sequence(embedded,lengths.cpu(),batch_first=True,enforce_sorted=False)\n    packed_output,(hidden,cell)=self.lstm(embedded)\n    hidden=self.dropout(torch.cat((hidden[-2,:,:],hidden[-1,:,:]),dim=1))\n    return self.fc(hidden).squeeze(1)\n\n# \u8bad\u7ec3\ndef train(model,dataloader,optimizer,criterion):\n    epoch_loss=0\n    epoch_acc=0\n    model.train()\n    for texts,labels in tqdm(dataloader):\n        texts,labels=texts.to(device),labels.to(device)\n        optimizer.zero_grad()\n        predictions=model(texts)\n        loss=criterion(predictions,labels)\n        loss.backward()\n        optimizer.step()\n        epoch_loss+=loss.item()\n        epoch_acc+=acc.item()\n    return epoch_loss/len(dataloader),epoch_acc/len(dataloader)\n\n# \u6a21\u578b\u8bc4\u4f30\ndef evaluate(model,dataloader,criterion):\n    epoch_loss=0\n    epoch_acc=0\n    model.eval()\n    with torh.no_grad():\n        for texts,labels in tqdm(dataloader):\n            texts,labels=texts.to(device),labels.to(device)\n            predictions=model(texts)\n            loss=criterion(predictions,labels)\n            acc=binary_accuracy(predictions,labels)\n            epoch_loss+=loss.item()\n            epoch_acc+=acc.item()\n    return epoch_loss/len(dataloader),epoch_acc/len(dataloader)\n\n# \u9884\u6d4b\ndef predict_sentiment(model,sentence,min_len=5):\n    model.eval()\n    tokenized=word_tokenize(sentence.lower())\n    if len(tokenized)&lt;min_len:\n        tokenized+=[\"&lt;pad&gt;\"]*(min_len-len(tokenized))\n    indexed=[word2idx.get(word,word2idx[\"unk\"]) for word in tokenized]\n    tensor=torch.LongTensor(indexed).to(device).unsqueeze(0)\n    prediction=torch.sigmoid(model(tensor))\n    pred_label=idx2label[1] if prediction.item()&gt;=0.5 else idx2label[0]\n    return pred_label\n</code></pre>"},{"location":"NOAI2024-Training/June9.html#2-lab","title":"2. Lab","text":"Python<pre><code>def load_data(csv_path=\"...\"):\n    txyz=pd.read_csv(csv_path)\n    t=np.array(txyz[\"timestamp\"])\n    x=np.array(txyz[\"x\"])\n    y=np.array(txyz[\"y\"])\n    z=np.array(txyz[\"z\"])\n    return t,x,y,z\n\ndef derivative(t,x,y,z):\n    dxdt=(x[1:]-x[:-1])/(t[1:]-t[:-1])\n    dydt=(y[1:]-y[:-1])/(t[1:]-t[:-1])\n    dzdt=(z[1:]-z[:-1])/(t[1:]-t[:-1])\n    return dxdt,dydt,dzdt\n\ndef plot2d_data(x,y,img_path):\n    fig=plt.figure()\n    ax=fig.add_subplot()\n    ax.plot(x,y,lw=1,c=\"dimgrey\")\n    plt.savefig(img_path,bbox_inches=\"tight\")\n    plt.show()\n    pla.cla()\n    plt.close(\"all\")\n</code></pre>"}]}