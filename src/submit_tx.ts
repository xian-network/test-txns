import axios from "axios";

async function main() {
	const request = {
		metadata: {
			signature: '925c079390da920a49f9f5c5a4daea86c9a53ecfb17821e1b6b88b325a726cdbef55c1ff6f1a6673a880e78b7c4dbbe37452f1cc5b84721e51bea0d6398bb909',
			timestamp: 1703739049
		  },
		  payload: {
			contract: 'currency',
			function: 'transfer',
			kwargs: {
			  amount: 1000,
			  to: 'bb0fab41b9118f0afdabf3721fa9a6caae3c93845ed409d3118841065ad1a197'
			},
			nonce: 1,
			sender: 'c93dee52d7dc6cc43af44007c3b1dae5b730ccf18a9e6fb43521f8e4064561e6',
			stamps_supplied: 50000
		  }
		}
	// for (let i = 0; i < 1; i++) {
		const base_url = "http://127.0.0.1:26657/broadcast_tx_commit";
		// request.payload.nonce = Math.random()
		const payloadString = Buffer.from(JSON.stringify(request)).toString("hex")
		axios.get(`${base_url}?tx="${payloadString}"`)
	// }
}

main();
