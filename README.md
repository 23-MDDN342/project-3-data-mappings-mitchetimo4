[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/wBh5q70M)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11103663&assignment_repo_type=AssignmentRepo)
## 2023 MDDN342 Assignment 3: Data Mappings


18/5/23

So far I have started my neon mask using arcs. This produces curves instead of straight lines unlike my sketch but I'm going to work with it for now while I get the rest of it drawn. My next step is to add the teeth and some eyebrows and alter the dots in the eyes. 

24/5/23

Added the halo ellipse. Still havnt added the teeth or other details as I am having a bit of trouble figuring out where to draw them. 

25/5/23

Today Completely redrew the eyes and mouth using new points from the face tracking data. I calculated a range of averages around the eyes and mouth to create new paths for the lines. rather than having a set shape following the eye points I now have dynamic eyes and mouth that change as the face under it does. This works far better and is actually closer to my sketch. I also added pupils and teeth. My next step is to draw some horns and experiment with colour. I also might a new set of eyes that are croses that I can swap too using sliders to increase variation in the final product. 

25/5/23

Changed colour of halo and added sketch files. I also added the cross eye variant and the horns variant but neither are linked to a slider yet. Next step is to do so. 

4/6/23

Everything is now linked to the sliders. I have also added a new mouth varient for open mouths using new values. My next step is to possibly add more colour options and train the sliders. 

4/6/23

I have now added a colour slider. My goal is to have purple neon for people with darker skin and blue neon for people with fairer skin. I have also changed my mind about some of the other training values. If the person in the image is showing teeth then i will show the smiling mouth and if not the open mouth. I have also changed the cross eyes to people with thick eyebrows. My next step is to train the faces. 

4/6/23

I have made a quick addition before I start the training. I have added more colour sliders for the horn colour and halo colour to change in relation to hair colour/darkness. Darker hair will now result in a darker accessory colour and vice versa.

I have trained the sliders now but they arent super accurate a lot of the time in the quiz. Im thinking about changing what im training it to do from

if showing teeth = smile
if long hair = halo
if dark skin = purple stroke
if prominant eyebrows = cross eyes
dark hair = orange halo/red horns
light hair = yellow halo/pink horns

to 

if smiling = smile
if long hair = halo
if dark skin = purple stroke
if angry eyebrows = cross eyes
dark hair = orange halo/red horns
light hair = yellow halo/pink horns

this could make it easier for the program to learn as it uses more tracking points and less colour. 