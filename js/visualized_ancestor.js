// this is the parent class the api that is called by interface.js

function _visualized_ancestor() {
    
    // private
    var p = new _parent();
    
    var local = this;
    
    var config  = {};
    
    var dom     = {};
    
    // public

    // name      : set_visualization_container
    // param     : none
    // functions : finds the container to hold the visualized content and sets 
    // return    : none
    local.set_visualization_container = function() {
        
        dom['audio_visualizer_block'] = document.getElementById('audio_visualizer_block');
        
        dom['audio_visualizer_test_page_container'] = document.getElementById('audio_visualizer_test_page_container');

    }
    
    // name      : set_container_size 
    // param     : none
    // functions : takes advantage of the existing containers and 
    //                determines its size and sets it to the parent object
    // returns   : none
    local.set_container_size = function() {

        // let keyword keeps scope
        let temp_block_dimensions = window.getComputedStyle(dom.audio_visualizer_block);

        let temp_page_dimensions = window.getComputedStyle(dom.audio_visualizer_test_page_container);

        block_dimensions['width']  = temp_block_dimensions.width;
        block_dimensions['height'] = temp_block_dimensions.height;
        
        page_dimensions['width']  = temp_page_dimensions.width;
        page_dimensions['height'] = temp_page_dimensions.height;
        
        p.set_setting('block_dimensions', block_dimensions);
        p.set_setting('page_dimensions',  page_dimensions);
    }
    
    // name      : draw_visualization
    // param     : data is the information sent by the file
    // functions : takes in the data and calls the correct function or class
    // returns   : none
    local.draw_visualization = function(data) {
        
    }
    
       
}