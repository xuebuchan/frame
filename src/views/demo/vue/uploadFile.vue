<template>
	<div>
		<div>
        <input id="file" type="file" />
        <button id="upload" type="button">upload</button>
    </div>
	</div>
</template>

<script>
	export default{
		name:"upload",
		mounted(){
			this.init()
		},
		methods:{
			init(){
				   let button = document.getElementById('upload')
			button.addEventListener('click', event => {
            let fileObj = document.getElementById('file').files[0]
            if (fileObj) {
                let url = 'http://localhost:3000/file_upload'
                let formData = new FormData()
                formData.append('image', fileObj)
                let xhr = new XMLHttpRequest()

                xhr.onload = function () {
                    console.log('ok')
                    console.log(JSON.parse(xhr.responseText))
                }
                xhr.onerror = function () {
                    console.log('fail')
                }
                xhr.open('post', url, true)
                xhr.send(formData)

            } else {
                console.log('请选择文件')
            }
        })
			}
		}
	}
</script>

<style>
</style>
