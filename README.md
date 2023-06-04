[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/wBh5q70M)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11103663&assignment_repo_type=AssignmentRepo)
## 2023 MDDN342 Assignment 3: Data Mappings


Final README

After redesigning my parameterised faces using new points I managed to create faces that recognise 
characteristics from the image being used and display a unique face based on them. They use 2 different
Eye options, 2 different mouth options, 2 different face colours and 2 different accessories, each with 
2 different colour options based on hair colour. 

I decided to use these as my mapped properties during training:
If smiling: smile, else draw an open mouth
If long hair: halo, else draw horns
If dark skin: neon purple stroke, else use neon blue stroke
If flat eyebrows: cross eyes, else draw regular eyes
Dark hair: orange halo/red horns
Light hair: yellow halo/pink horns

The reason being after many attempts I found it most effective to target the shape of the 
tracking points rather than colours. Although it sometimes has trouble recognising smiles and the 
correct eyebrows, it still shows an accurate representation of the reference image's characteristics. 
