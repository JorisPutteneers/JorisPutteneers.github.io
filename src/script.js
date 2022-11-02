for(var i = 0; i < objects.length; i++){
    
    header_div(i)
}

function header_div(i){
    
    let object = eval('({' + objects[i] + '})')[objects[i]] //grab every object
    var images = document.getElementById("container") //grab images element

    let folder = document.createElement("div")
    folder.classList.add('folder') //create a div class

    let images_header = document.createElement("img") //create an image tag
    images_header.classList.add('header') //create a class
    images_header.src = object['images'][object['header_index']] //set the source to the images['header image']

    let header_image = document.createElement("div")
    header_image.classList.add('header_image') //create a class

    images.appendChild(folder).appendChild(header_image).appendChild(images_header) //append the header to the original images tag 

    let title = document.createElement("span") //create an image tag
    title.classList.add('title')
    title.innerHTML = object["folder_name"]

    folder.appendChild(header_image).appendChild(document.createElement("br"))
    folder.appendChild(header_image).appendChild(title)
    let content = document.createElement("div")

    var x = 1
    images_header.onclick = function() {
    x +=1
    if(x % 2 == 0){
        let text = document.createElement("span")
        text.classList.add('text')
             
        for(var i = 0; i < object["images"].length; i++){
            
            content.classList.add('content')
            
            let img = document.createElement("img")
            img.classList.add('img')
            img.src = object["images"][i]
            folder.appendChild(content).appendChild(img)
        }
        readTextFile(object["text"], text, folder,content)
        }
        
    else{content.replaceChildren()}

    
    }
}

function readTextFile(file, text, folder, header_image, content)
    {   let text_container = document.createElement("div")
        text_container.classList.add('text_container')
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0 )
                {
                    var allText = rawFile.responseText;
                    text.innerHTML = allText
                    console.log(rawFile.status);
                    header_image.appendChild(text_container).appendChild(text)  
                }
            }
        }
        rawFile.send(null);
    }





// make text appear on bio hover

var Annelotte_lammertse = document.getElementById("Annelotte_Lammertse")

Annelotte_lammertse.addEventListener("mouseover", open_about);


var about = document.createElement("div")
about.innerHTML = "Joris putteneers is an architect and researcher, interested in speculating the anthroposcene through means of software, hardware and media technologies.  His work has been exhibited at MomA New York, Londen design festival, Venice Biennale and multiple film festivals.  He has taught studios and workshops internationally at the Bartlett UCL, Texas A&M, KUL Faculty of Architecture and TU Wien."
about.classList.add('about')
Annelotte_lammertse.appendChild(about)
about.style.display = "none"

function open_about(){
  if (about.style.display !== "none") {
    about.style.display = "none";
  } else {
    about.style.display = "block";
  }
};



var menu = document.getElementById("menu")

// make even tlistener
menu.addEventListener("click", openmenu)
var menu_content = document.createElement("div")
menu_content.classList.add('menu_content')

menu.appendChild(menu_content)
menu_content.style.display = "none"

var bio = document.createElement("div")
bio.innerHTML = "bio"
var projects = document.createElement("div")




projects.innerHTML = "projects"
var contact = document.createElement("div")
contact.innerHTML = "contact"

menu_content.appendChild(bio)
menu_content.appendChild(projects)
menu_content.appendChild(contact)

// menu.appendChild(menu_content)

function openmenu(){
    if (menu_content.style.display !== "none") {
        menu_content.style.display = "none";
      } else {
        menu_content.style.display = "block";
      }
    };
    