let availablekeywords = [
    'HTML',
    'CSS',
    'Easy tutorials',
    'Web Design',
    'Java Script',
    'Where to learn coding online',
    'Where to learn web design',
    'How to create a website',
    'Blue lock',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availablekeywords.filter((keyword)=>{
        return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
   }

   function display(result){
      const content = result.map((list)=>{
        return "<li>" + list + "</li>";
      });

      resultsBox.innerHTML = "<ul>" + content + "</ul>";
    } 
    