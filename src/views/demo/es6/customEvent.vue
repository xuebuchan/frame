<template>
	<div>
		<form id="msgBox">
		  <label for="msg">
			your message: <input type="text" id="msg">
		  </label>
		  <button>提交</button>
		</form>
	</div>
</template>

<script>
	export default{
		name:"customEvent",
		data(){
			return {
				
			}
		},
		created(){
			
		},
		mounted(){
// 			const event = new CustomEvent('newMessage', {
// 				detail: {
// 				  message: 'Hello World',
// 				  time: new Date(),
// 				},
// 				bubbles: true,
// 				cancelable: true,
// 				}
// 			);
			const msgBox = document.querySelector('#msgBox');
			// msgBox.dispatchEvent( event );
			msgBox.addEventListener('submit',SendMessage);

				function SendMessage (e) {
				e.preventDefault();

				let msg = document.getElementById("msg").value.trim();

				if (msg && window.CustomEvent) {
				  let event = new CustomEvent("newMessage", {
					detail: {
					  message: msg,
					  time: new Date(),
					},
					bubbles: true,
					cancelable: true
				  });

				  e.currentTarget.dispatchEvent(event);
				}
		
				}
				
				function newMessageHandler(e) {
					  console.log(`Event subscriber on  ${e.currentTarget.nodeName},
					  ${e.detail.time.toLocaleString()}, message: ${e.detail.message}`);
				  }
				  document.addEventListener("newMessage", newMessageHandler);
			}
	}
</script>

<style>
</style>
