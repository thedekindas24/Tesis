const nodemailer = require('nodemailer')

enviarMail = ()=> {

    const config = (
        host : 'smtp.gmail.com'
        port : 587
        auth : (
          user : 
        )

    )
        
        

    const transport = nodemailer.createTransport(config);


}





const input = document.querySelector("input");
const preview = document.querySelector(".preview");



input.addEventListener("change", updateImageDisplay);

function updateImageDisplay() {
    while (preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }
  
    const curFiles = input.files;
    if (curFiles.length === 0) {
      const para = document.createElement("p");
      para.textContent = "No files currently selected for upload";
      preview.appendChild(para);
    } else {
      const list = document.createElement("ol");
      preview.appendChild(list);
  
      for (const file of curFiles) {
        const listItem = document.createElement("li");
        const para = document.createElement("p");
        if (validFileType(file)) {
          para.textContent = `File name ${file.name}, file size ${returnFileSize(
            file.size,
          )}.`;
          const image = document.createElement("img");
          image.src = URL.createObjectURL(file);
  
          listItem.appendChild(image);
          listItem.appendChild(para);
        } else {
          para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
          listItem.appendChild(para);
        }
  
        list.appendChild(listItem);
      }
    }
  }
  


  
  const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon",
  ];
  
  function validFileType(file) {
    return fileTypes.includes(file.type);
  }


  function returnFileSize(number) {
    if (number < 1024) {
      return `${number} bytes`;
    } else if (number >= 1024 && number < 1048576) {
      return `${(number / 1024).toFixed(1)} KB`;
    } else if (number >= 1048576) {
      return `${(number / 1048576).toFixed(1)} MB`;
    }
  }



/*favorite(){
    let addFavorite = $('#property')[0].checked;
    if(lsTest()){
        if( JSON.parse( localStorage.getItem('session') ) && JSON.parse( localStorage.getItem('session') ).user && JSON.parse( localStorage.getItem('session') ).user.id ){
            $.ajax({
                type : addFavorite ? 'POST': 'DELETE',
                url : `${new Config().API}/users/${JSON.parse( localStorage.getItem('session') ).user.id}/favorite-listings/${$("#FriendlyID").val()}`,
                beforeSend: function(xhr, settings){
                    inc_preloader();
                    closeModal('showModal');
                },
                error : function(xhr, ajaxOptions, thrownError) {
                    done_preloader();
                    Swal.fire({
                        icon: 'error',
                        title: xhr.responseJSON.message,
                        showConfirmButton: false,
                        timer: 5000
                    })
                },
                success : function(data) {
                    done_preloader();
                    Swal.fire({
                        icon: 'success',
                        title: addFavorite ? 'Saved as favorite': 'Delete of favorites',
                        showConfirmButton: false,
                        timer: 5000
                    })
                    if(addFavorite){ 
                        let favoritesIds =JSON.parse(localStorage.getItem("favorites")).concat(parseInt($("#FriendlyID").val()));
                        localStorage.setItem("favorites", JSON.stringify(favoritesIds));
                    }else{
                        let favoritesIds =JSON.parse(localStorage.getItem("favorites")).filter((favorite)=> favorite !== parseInt($("#FriendlyID").val(),10) )
                        localStorage.setItem("favorites", JSON.stringify(favoritesIds));
                    }
                }
            });
        }else{
            loginModal()
        }
    }
}*/