const Lamden = require("lamden-js");

let lamdenWallet = Lamden.wallet.new_wallet();

//Sender and Receiver public keys
let senderVk = "c93dee52d7dc6cc43af44007c3b1dae5b730ccf18a9e6fb43521f8e4064561e6";
let receiverVk = "bb0fab41b9118f0afdabf3721fa9a6caae3c93845ed409d3118841065ad1a197";

// Kwargs are the arugments you will send the contract method.
// For example the "currency" contract's "transfer" method needs two arguments to create a transfter; the person reciving the TAU and the amount to transfer.  So we create a kwargs object like so.
let kwargs = {
	to: receiverVk,
	amount: 1000
};

let txInfo = {
	senderVk,
	contractName: "currency",
	methodName: "transfer",
	kwargs,
	stampLimit: 50000, //Max stamps to be used. Could use less, won't use more.
};

let networkInfo = {
	// Optional: Name of network
	name: "Lamden Public Testnet",

	// Required: type of network 'mockchain', 'testnet', 'mainnet'
	type: "testnet",

	// This is the URL of our local nodejs server which gives us a mock nonce.
	hosts: ["http://127.0.0.1:3000"]
};

console.log({ txInfo });

let tx = new Lamden.TransactionBuilder(networkInfo, txInfo);

let senderSk = "<SENDER SK>";
console.log({tx})
setInterval(()=>{
	for (let i = 0; i < 100; i++) {
		tx.send(senderSk, (res, err) => {
			// if (err) throw new Error(err);
			// console.log(res.hash);
			// tx.checkForTransactionResult().then((res) => console.log(res));
		});
	}
},150)
