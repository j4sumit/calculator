import styled from "styled-components";

export const Container = styled.div` 
display:grid;
justify-content:center;
align-items:center;
width:400px;
// min-height: 500px;
margin: 40px auto;
grid-template-column:repeat(4,100px);
grid-template-rows: minmax(120px, auto) repeat(5,100px);
box-shadow:2px 2px 10px #333;
border-radius:10px;
` 
export const Screen = styled.div`
grid-column: 1/-1;
background-color: rgba(60,66,67,0.75);
display:flex;
justify-content:placearound;
flex-direction: column;
padding: 10px;
word-wrap: break-word;
breack-word:break-all;
text-align: right;
border-top-left-radius:10px;
border-top-right-radius:10px;
`

export const Previous=styled.div`
color:rgba(255,255,255,0.75);
font-size:1.3rem;
`

export const Current=styled.div`
color: white;
font-size:2.5rem;
`