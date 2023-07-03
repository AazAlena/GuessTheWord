<script>

import axios from 'axios';
import dayjs from 'dayjs';


export default {
    data() {
        return {
            alphabet: [{value: "А", use: false, right: false}, {value: "Б", use: false, right: false}, {value: "В", use: false, right: false}, {value: "Г", use: false, right: false}, {value: "Д", use: false, right: false}, 
                       {value: "Е", use: false, right: false}, {value: "Ё", use: false, right: false}, {value: "Ж", use: false, right: false}, {value: "З", use: false, right: false}, {value: "И", use: false, right: false}, {value: "Й", use: false, right: false}, 
                       {value: "К", use: false, right: false}, {value: "Л", use: false, right: false}, {value: "М", use: false, right: false}, {value: "Н", use: false, right: false}, {value: "О", use: false, right: false}, {value: "П", use: false, right: false},
                       {value: "Р", use: false, right: false}, {value: "С", use: false, right: false}, {value: "Т", use: false, right: false}, {value: "У", use: false, right: false}, {value: "Ф", use: false, right: false}, {value: "Х", use: false, right: false},
                       {value: "Ц", use: false, right: false}, {value: "Ч", use: false, right: false}, {value: "Ш", use: false, right: false}, {value: "Щ", use: false, right: false}, {value: "Ь", use: false, right: false}, {value: "Ъ", use: false, right: false},
                       {value: "Ы", use: false, right: false}, {value: "Э", use: false, right: false}, {value: "Ю", use: false, right: false}, {value: "Я", use: false, right: false}], 
            times: 10,
            theWord: [{value: "К", guessed: false}, {value: "О", guessed: false}, {value: "Ш", guessed: false}, {value: "К", guessed: false}, {value: "А", guessed: false}],
            theWordAll: "КОШКА",
            rightLetters: 0,
            littletime: false,
            
            colors: ['red', '#FF3300', '#ff6600', '#ff9900', '#FFCC00', '#FFFF00', '#ccff00', '#99ff00', '#66ff00', '#66ff66'],

            theWorsAll2: []
        }
    },
    mounted(){
        this.grabWords();
    },

    methods: {
        async grabWords(){
            let response = await axios.get('/words/all');
            this.theWordsAll2 = response.data;

            // console.log(this.theWordsAll2[this.getRandomNumber(0, this.theWordsAll2.length)])

            let BDWord = this.theWordsAll2[this.getRandomNumber(0, this.theWordsAll2.length)]
            this.theWord = BDWord.theWord;
            this.theWordAll = BDWord.theWordAll;

            console.log(this.theWord, this.theWordAll)
        },

        getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        },

        ClickLetter(evt){
          if (evt.use == false){
            if(this.times == 3){
                this.littletime = true;
            }

            if (this.times>0){
                if (this.theWordAll.includes(evt.value)){
                    
                    evt.right = true;
                    evt.use = true;
                    
                    for (let i of this.theWord){
                        if (i.value==evt.value){
                            i.guessed = true;
                            console.log(i.guessed);
                            this.rightLetters+=1
                        }
                    }
                    console.log(this.rightLetters, this.theWordAll.length)
                    // this.theWord[this.theWordAll.indexOf(evt.value)].guessed = true;
                    // console.log(this.theWord[this.theWordAll.indexOf(evt.value)].guessed);

                    if(this.rightLetters==this.theWordAll.length){
                        alert('Вы выиграли) '+
                        'Ответ: '+this.theWordAll);
                        
                        location.reload()
                    }
                } else {
                    console.log('до', this.times);
                    evt.use = true;
                    this.times-=1;

                    if(this.times<1){
                        alert('Вы проиграли( '+
                        'Ответ: '+this.theWordAll);
                        
                        location.reload()
                    }
                    console.log('после', this.times);
                }
            }
          }
          console.log(evt);
        }
    }
}
</script>

<template>
    <div class="container" style="margin: 50px;">
        <div class="row">
            <div class="col" style="margin-right: 20px; flex-basis:30%"><!--  -->
                <div class="times row" :style="'background-color:'+ colors[this.times-1]+ '; max-width: 300px;'" :class="{'littletime': this.littletime}">{{this.times}}</div>

                <div class="row" style="height: 400px; position:relative">

                    <div style="border-top: solid 5px #000000; 
                    position: absolute; bottom: 312px; left: 75px;
                    width: 100px; padding:0px;" ></div>

                    <div style="border-right: solid 5px #000000; 
                    position: absolute; bottom: 256px; left: 175px;
                    height: 60px; width: 0px; padding:0px;" ></div>
 
                    <div style="border: solid 5px #000000; 
                    position: absolute; bottom: 221px; left: 160px;
                    height: 35px; width: 35px; padding:0px;
                    border-radius:50%"></div>

                    <div style="border-right: solid 5px #000000; 
                    position: absolute; bottom: 151px; left: 175px;
                    height: 70px; width: 0px; padding:0px;" ></div>

                    <div style="border-left: solid 5px #000000; 
                    position: absolute; bottom: 12px; left: 75px;
                    height: 300px; width: 0px; padding:0px;" ></div>

                    <div style="border-bottom: solid 5px #000000; 
                    position: absolute; bottom: 10px; left: 20px;
                    width: 120px;"></div>


                    <div style="border-right: solid 5px #000000; 
                    position: absolute; bottom: 104px; left: 168px;
                    height: 50px; width: 0px; padding:0px;
                    
                    transform:rotate(20deg);
                    " ></div>

                    <div style="border-right: solid 5px #000000; 
                    position: absolute; bottom: 104px; left: 184px;
                    height: 50px; width: 0px; padding:0px;
                    
                    transform:rotate(160deg);
                    " ></div>


                    <div style="border-right: solid 5px #000000; 
                    position: absolute; bottom: 154px; left: 184px;
                    height: 50px; width: 0px; padding:0px;
                    
                    transform:rotate(160deg);
                    " ></div>

                    <div style="border-right: solid 5px #000000; 
                    position: absolute; bottom: 154px; left: 168px;
                    height: 50px; width: 0px; padding:0px;
                    
                    transform:rotate(20deg);
                    " ></div>

                </div>
            </div>
            <div class="col" style="flex-basis:50%">
                <div class="row times" style="justify-content: center; gap: 2%; width: 100%; margin: 0 10% 10% 0;">
                    <div v-for="(item, index) in theWord" class="col one"
                    style=" max-width: 40px;"
                    >{{item.guessed === true ? item.value : ''}}{{item.guessed === false ? "_" : ''}}</div>
                </div>
                <div class="row" style="gap: 10px; width:300px; justify-content: center;">
                    <div v-for="(item, index) in alphabet" class="col alphabet" :class="{'right': item.use && item.right, 'false': item.use && !item.right}" @click="ClickLetter(item)" 
                    style="max-width: 45px; "
                    >{{item.value}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.littletime{
    background-color: rgb(255, 81, 81);
}

.times{
    padding: 10px;
    border: black solid 1px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    
}
.alphabet{
    display: flex;
    border: black solid 1px;
    border-radius: 50%;
    padding: 3% 5.5%;
    align-items: center;
    justify-content: center;

    color: white;
    background-color: black;
}
.right{
    border-color: green;
    color: green;
    background-color: white; 
}
.false{
    border-color: red;
    color: red;
    background-color: white;
}

</style>