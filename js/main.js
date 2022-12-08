
import Lightbox from "./components/TheLightbox.js";
import Thecars from "./components/Thecars.js";

(() => {

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
  
  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))
    // create vue instance here
    const { createApp } = Vue

    createApp({
        created() {
        //get remote data
            fetch('./scripts/json.php')//get json file
                .then(res => res.json())//turn to a js object
                .then(data => this.valueData = data)//transform into a element that can be used in js
            .catch(error => console.error(error));//if something wrong happens, catch the error            
        },

        data() {
            return {
                valueData: {},
                loadBData: {},
                showLightBox:false
            }
        },

        components: {
          lightbox: Lightbox,
          cars: Thecars
        },

        methods: {
            loadLightbox(value) {
                this.loadBData = value;
                this.showLightBox = true;
            }
        }
    }).mount('#app')
})()