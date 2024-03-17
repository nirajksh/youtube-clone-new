import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name:"Niraj Kumar Singh",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies:[
      {
        name:"Niraj Kumar Singh",
        text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        replies:[]
      },
      {
        name:"Niraj Kumar Singh",
        text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        replies:[
          {
            name:"Niraj Kumar Singh",
            text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            replies:[]
          },
          {
            name:"Niraj Kumar Singh",
            text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            replies:[
              {
                name:"Niraj Kumar Singh",
                text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                replies:[]
              },
              {
                name:"Niraj Kumar Singh",
                text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                replies:[
                  {
                    name:"Niraj Kumar Singh",
                    text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                    replies:[]
                  },
                  {
                    name:"Niraj Kumar Singh",
                    text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                    replies:[
                      {
                        name:"Niraj Kumar Singh",
                        text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                        replies:[]
                      },
                      {
                        name:"Niraj Kumar Singh",
                        text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                        replies:[
                          {
                            name:"Niraj Kumar Singh",
                            text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                            replies:[]
                          },
                          {
                            name:"Niraj Kumar Singh",
                            text:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                            replies:[]
                          },
                        ]
                      },
                    ]
                  },
                ]
              },
            ]
          },
        ]
      },
    ],
  
  },
  {
     name:"Niraj Kumar Singh",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  replies:[]
},
  { 
    name:"Niraj Kumar Singh",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  replies:[]
},
  {
     name:"Niraj Kumar Singh",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  replies:[]
},
  {
     name:"Niraj Kumar Singh",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  replies:[]
},
  {
     name:"Niraj Kumar Singh",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  replies:[]
},
];

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="text-lg font-bold mb-2">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
