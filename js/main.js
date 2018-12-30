"use strict"

function main() {
    
    var visualizer = new _visualizer();
    
    var intfce = new _interface();
    
    var visualizer_set_up = new _visualizer_set_up();
    
    visualizer.init(intfce.get_song_title());

    intfce.init(visualizer.get_setting('audio_element'), events);
    
    visualizer.make_friends(intfce);
    
    console.log(visualizer.get_setting("audio_element"));

    visualizer.get_setting('audio_element').onplay = function() {

         // this line is the player pressing audio        
          visualizer.get_setting("audio_context").resume();
          visualizer.get_setting('audio_element').play();

          // i think this line is what grabs the interface        
          visualizer.play();
          
    }

    events.add(intfce.get_dom('play_button'), 'click', function() {

         // this line is the player pressing audio        
          visualizer.get_setting("audio_context").resume();
          visualizer.get_setting('audio_element').play();

          // i think this line is what grabs the interface        
          visualizer.play();

    })
    

}

events.add(window, "load", main());