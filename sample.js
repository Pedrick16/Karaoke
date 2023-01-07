$(document).ready(function(){
    $('#beer').on('click',function(){
        
        $('#video').empty()
        $('#video').append(`
        
        <embed  style=" width:1150px; height:605px" src="https://www.youtube.com/embed/C8twukz-0g0?autoplay=1&mute=1"> </embed> 
        `)
        $('#karaoke').animate({
            fontSize: '20px',
            letterSpacing: '24px',
            paddingTop:'5px'
        });

        $('#karaoke').css("color",  "white")
        $('#title').css("background",'black')
  
    })
    $('#love_gone').on('click',function(){
        $('#video').empty()
        $('#video').append(`
         <embed style=" width:1150px; height:650px" src="https://www.youtube.com/embed/Y-Qodwi4mEA?autoplay=1&mute=1"> </embed> 

        `)
        $('#karaoke').animate({
            fontSize: '20px',
            letterSpacing: '24px',
            paddingTop:'5px'
        });

        $('#karaoke').css("color",  "orange")
        $('#title').css("background",'black')
        
    
    })

    $('#karma').on('click',function(){
        $('#video').empty()
        $('#video').append(`
         <embed style=" width:1150px; height:650px" src="https://www.youtube.com/embed/L1TvXaYc_f8?autoplay=1&mute=1"> </embed> 

        `)
        $('#karaoke').animate({
            fontSize: '20px',
            letterSpacing: '24px',
            paddingTop:'5px'
        });

        $('#karaoke').css("color",  "whitesmoke")
        $('#title').css("background",'black')
        
    
    })

    $('#habang_buhay').on('click',function(){
        $('#video').empty()
        $('#video').append(`
         <embed style=" width:1150px; height:650px" src="https://www.youtube.com/embed/Ka87_cY_a44?autoplay=1&mute=1"> </embed> 

        `)
        $('#karaoke').animate({
            fontSize: '20px',
            letterSpacing: '24px',
            paddingTop:'5px'
        });

        $('#karaoke').css("color",  "orange")
        $('#title').css("background",'black')
        
    
    })

    $('#bimbo').on('click',function(){
        $('#video').empty()
        $('#video').append(`
         <embed style=" width:1150px; height:650px" src="https://www.youtube.com/embed/HjCNp9huVNk?autoplay=1&mute=1"> </embed> 

        `)
        $('#karaoke').animate({
            fontSize: '20px',
            letterSpacing: '24px',
            paddingTop:'5px'
        });

        $('#karaoke').css("color",  "violet")
        $('#title').css("background",'black')
        
    
    })

})
