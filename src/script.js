
// console.log(userdata);

exandTitle('Annelotte_Lammertse', userdata['Annelotte_Lammertse'])
createmenu('menu_container','menu', open,  userdata['bio'], userdata['contact'])    

for(var i = 0; i < objects.length; i++){
  header_div()
}


// -----------------------------------functions


function header_div(){
  
  
  
    
    var images = document.getElementById("container") //grab images element
    let object = eval('({' + objects[i] + '})')[objects[i]] //grab every object

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
    
    
    let foobar = startup();
    
    // console.log(foobar);
    
    images_header.onclick = function() {    
      // let foobar = startup();
      
      
      x +=1
      let text = document.createElement("span")
      text.classList.add('text')
      
      if(x % 2 == 0){

        console.log(x);
        for(var i = 0; i < object["images"].length; i++){
          content.classList.add('content')
          // console.log(viewing);
          let img = document.createElement("img")
          img.classList.add('img')
          img.src = object["images"][i]
          folder.appendChild(content).appendChild(img)
        }
        readTextFile(object["text"], text, folder,content)
      }
      
      else{content.replaceChildren()
        
      }
      
      
    }
  
  function startup() {
    
    x += Math.round(Math.random())
    array = []
    if(x !=1){
      array.push(object["folder_name"])
      
      let viewing = document.getElementById("viewing")
      for(var i = 0; i<array.length; i++){
        
        let bar = document.createElement("div")
        bar.innerHTML = array[i]
        viewing.appendChild(bar)
        
      }
      
      // console.log(array);
      
    }
    let text = document.createElement("span")
    text.classList.add('text')
    if(x % 2 == 0){
      // console.log(x);
      for(var i = 0; i < object["images"].length; i++){
        
        content.classList.add('content')
        
        let img = document.createElement("img")
        img.classList.add('img')
        img.src = object["images"][i]
        folder.appendChild(content).appendChild(img)
      }
      readTextFile(object["text"], text, folder,content)
    }
    
    // console.log(array);
    // console.log(array);
    // else{content.replaceChildren()}
    return array
    
  }
  // startup()
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
                    // console.log(rawFile.status);
                    header_image.appendChild(text_container).appendChild(text)  
                }
            }
        }
        rawFile.send(null);
    }





// make text appear on bio hover


function exandTitle(id, content){

  var Annelotte_lammertse_container = document.getElementById(id)
  var Annelotte_lammertse = document.createElement('div')
  Annelotte_lammertse.innerHTML = "Annelotte_Lammertse"
  Annelotte_lammertse.classList.add("name")

  Annelotte_lammertse_container.appendChild(Annelotte_lammertse)

  var about = document.createElement("div")
  about.innerHTML = content
  

  
  about.classList.add('about')
  Annelotte_lammertse_container.appendChild(about)
  about.style.display = "none"

  Annelotte_lammertse.addEventListener("click", function(){

    if (about.style.display !== "none") {
      about.style.display = "none";
    } else {
      about.style.display = "block";
    }

  }
  );

}





// create dynamic menu
function createmenu(menu_container, menu,  expand, bio_text, contact_text){


  var menu_container = document.getElementById(menu_container)
  var menu = document.createElement("div")
  menu.classList.add('menu')
  menu.innerHTML = 'menu'
  menu_container.appendChild(menu)


  var menu_content = document.createElement("div")
  menu_content.classList.add('menu_content')
  menu_container.appendChild(menu_content)

  var bio_container = document.createElement('div') //
  var bio = document.createElement("div")
  bio.innerHTML = "bio"
  bio.classList.add('menu_item')
  menu_content.appendChild(bio_container).appendChild(bio) //
  

  var bio_content = document.createElement("div")
  bio_content.classList.add('menu_item_content')
  bio_content.innerHTML =  bio_text
  
  bio_container.appendChild(bio_content) //

  var projects_container = document.createElement('div')

  var projects = document.createElement("div")
  projects.innerHTML =  'project'
  projects.classList.add('menu_item')

  menu_content.appendChild(projects_container).appendChild(projects) //

  var projects_content = document.createElement("div")
  projects_content.classList.add('menu_item_content')

  menu_content.appendChild(projects_content)
  
  var contact_container = document.createElement('div')
  var contact = document.createElement("div")
  contact.innerHTML = "contact"
  contact.classList.add('menu_item')

  menu_content.appendChild(contact_container).appendChild(contact) //
  
  var contact_content = document.createElement("div")
  contact_content.classList.add('menu_item_content')
  contact_content.innerHTML =  contact_text
  
  contact.appendChild(contact_content)

  // ------------------------------
  
  for(var i = 0; i < objects.length; i++){
    let object = eval('({' + objects[i] + '})')[objects[i]] 
    let project_item = document.createElement("div")
    project_item.addEventListener("click", function () {
      console.log('ss')
    })
    project_item.innerHTML =object['folder_name']
    projects_container.appendChild(projects_content).appendChild(project_item)
  }
  
  contact_container.appendChild(contact_content)
  

  expand(menu,menu_content)
  expand(bio,bio_content)
  expand(projects,projects_content)
  expand(contact,contact_content)
  expandAll(menu,"menu_item_content")


  }



  
  function open(container, content){

    content.style.display = "none"
    // console.log(typeof(content));
    container.addEventListener("click", function () {
      if (content.style.display !== "none") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }})

    };

function expandAll(container, content){
  let className = document.getElementsByClassName(content)

    container.addEventListener("click", function () {
      
      for(var i = 0; i < className.length; i++){
        
        if (className[i].style.display !== "none") {
          className[i].style.display = "none";
        }
      }
    })
}



