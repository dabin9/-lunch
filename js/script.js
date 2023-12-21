function ran(){
    const menu_list = ["불고기","찜닭","닭볶음탕","된장찌개","김치찌개","부대찌개","카레","된장밥","오므라이스","붕어빵","순두부찌개","청국장","김치볶음밥","김밥","분식집 라면","라멘","돈부리","오징어덮밥","순대국","짬뽕","짜장면","떡볶이","우동","냉면","쌀국수","초밥","낙지볶음","햄버거","오늘만은 다이어트?"];
    const btn = document.querySelector(".random");
    function event_listener() {
       
        btn.addEventListener("click", function(){
            let randomArray = menu_list[Math.floor(Math.random() * menu_list.length)];
            alert(randomArray)
        })
    }
    function init(){
        event_listener();
    }
    (_=>{
        init();
    })();
}

new ran;
