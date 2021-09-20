import styled from 'styled-components'
export const CoursesWrap = styled.div`
.courses {
    /* height: 100vh; */
    background-color: black;
    padding: 70px 50px 20px;
    h2{
        margin-top: 8px;
    }
    .title{
        color: silver;
    }
}
@media only screen and (max-width: 500px){
 .title {
     font-size: 13px;
     color: gray;
 }
}
`