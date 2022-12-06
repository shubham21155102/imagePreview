const selectImage = document.querySelector('.select-image');
const image_input = document.querySelector("#image");
selectImage.addEventListener('click', function () {
	image_input.click();
})
image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});
const cropper=new Cropper(selectImage,{
    aspectRatio: 0,
    viewMode:0,
})
document.getElementById('cropImageBtn').addEventListener('click',function(){
    var croppedImage=cropper.getCroppedCanvas().toDataURL("image/png");
document.getElementById('output').src=croppedImage
})
