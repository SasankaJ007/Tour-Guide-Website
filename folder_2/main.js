function loadData(name){
    if(name=="prev"){
        document.getElementById("pop1").src="../images/popular2.jpg";
        document.getElementById("pop2").src="../images/popular3.jpg";
        document.getElementById("pop3").src="../images/popular5.jpg";
        document.getElementById("pop4").src="../images/popular1.jpg";
        
        document.getElementById("pheader1").innerHTML="Honeymoon";
        document.getElementById("pheader2").innerHTML="family";
        document.getElementById("pheader3").innerHTML="Wild Life";
        document.getElementById("pheader4").innerHTML="Adventure";

        document.getElementById("info1").innerHTML="best romantic getaway - Soulmate Special Honeymoon Packages";
        document.getElementById("info2").innerHTML="Special Sri Lanka Family Tour: Yala, Bentota and Colombo";
        document.getElementById("info3").innerHTML="Untouched sri lanka wild life.";
        document.getElementById("info4").innerHTML="Sri lanka one life adventures -12 days.";

    }
    else if(name=="nxt"){
        document.getElementById("pop1").src="../images/popular6.jfif";
        document.getElementById("pop2").src="../images/popular7.jpeg";
        document.getElementById("pop3").src="../images/popular8.jpg";
        document.getElementById("pop4").src="../images/popular9.jpg";

        document.getElementById("pheader1").innerHTML="Culture & heritage";
        document.getElementById("pheader2").innerHTML="Hiking & trekking";
        document.getElementById("pheader3").innerHTML="Luxury package";
        document.getElementById("pheader4").innerHTML="Beach & Diving";
        
        document.getElementById("info1").innerHTML="travel to see beautiful places and to meet great souls.";
        document.getElementById("info2").innerHTML="Its not the mountain we conquer, but ourselves.";
        document.getElementById("info3").innerHTML="Life Is too short to wait";
        document.getElementById("info4").innerHTML="Soak in the beaches of Sri Lanka - beach & diving Packages";
      
    }
}


function reviews(name){
    if(name=="rone"){
        document.getElementById("profilepic").src="../images/people1.jpg";
        
        document.getElementById("profilename").innerHTML="Katie Jackson";
        
        document.getElementById("profilereview").innerHTML="Al and I want to thank you for putting together a wonderful trip for us.  We had a great time (all 8 of us). We are impressed with the people we met.  Everyone was so friendly and helpful.   We felt they really cared about us and wanted us to have a good time – which we did.";
        
    }
    else if(name=="rtwo"){
        document.getElementById("profilepic").src="../images/people2.jfif";
        
        document.getElementById("profilename").innerHTML="Daniel Witecker";
        
        document.getElementById("profilereview").innerHTML="I really, really enjoyed my trip. It was a good combination of physical activity, cultural opportunities and relaxation. Christina is without a doubt one of the BEST guides I ve ever had From beginning to end. she was there; seeing to our needs.She is knowledgeable personable and tireless! All I had to say was Everyone knows Christina! She is what made the trip especially memorable";
        
    }
    else if(name=="rthree"){
        document.getElementById("profilepic").src="../images/people3.jpg";
        
        document.getElementById("profilename").innerHTML="Rainey jones";
        
        document.getElementById("profilereview").innerHTML="Cyn and I both enjoyed the tour, and your leadership, planning, translation, advice, and companionship made it all possible. We really felt like we were traveling with a good friend rather than a tour director";
        
    }
    else if(name=="rfour"){
        document.getElementById("profilepic").src="../images/people4.jpg";
        
        document.getElementById("profilename").innerHTML="Sophie Alan";
        
        document.getElementById("profilereview").innerHTML="Thank you Les, for a great trip! You made our 4th anniversary something we will always fondly remember.";
        
    }
    else if(name=="rfive"){
        document.getElementById("profilepic").src="../images/people5.jpg";
        
        document.getElementById("profilename").innerHTML="Charlott durret";
        
        document.getElementById("profilereview").innerHTML="All-in-all, the experience of the trip was noteworthy, for which we are grateful and for which we again thank you.We wish you the best for the upcoming holidays and for the coming year.Our warmest regards";
        
    }

}