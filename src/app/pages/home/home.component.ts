import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin, ScrollTrigger, Draggable);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  constructor(){
    //Very important to wait for DOM, otherwise nothing works 
    document.addEventListener("DOMContentLoaded", function(event) {

      Draggable.create("#drag");

      var timeline = gsap.timeline();

      timeline
      .from(".test", {duration: 1.5, x: -300, backgroundColor: "#675321", ease: "elastic"})
      .from(".circle", {duration: 1, x: 200,  backgroundColor: "#896351", ease: "bounce", stagger: 0.1}, "<")
      //replaces yourElement's text with "This is the new text" 
      .from(".h2", {
        duration: 1.1,
        color: "#789545",
        text: "Lorem ipsum sit amet",
        ease: "none"
      }, "-=0.5");

      //Now we timeline to wait for scroll. End scroll must be calculated. 
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.container',
          start: 'top center', // when the top of the trigger hits the top of the viewport
          end: '+=1000', // end after scrolling XXXpx beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      });
      
      // Happens after "end" pixels scrolling 
      tl.from('.box', {
        backgroundColor: '#28a92b',
        rotation: 360,
        scale: 0,
      });

      
    });

   

   
  }

  
  
}
