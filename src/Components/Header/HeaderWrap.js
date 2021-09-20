import styled from 'styled-components'
export const HeaderWrap = styled.div`
.header {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    background-color: white;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 400;
    img{
        width: 150px;
        filter: drop-shadow(0 0 2px red)
    }
    .header-right{
        /* padding-right: 100px; */
        ul {
        list-style-type: none;
        display: none ; 
        justify-content: space-between;
        align-items:center;
        transition: .5s;
        li {
            padding-right: 25px;
            margin-top: 15px;

             a { 
                 font-size: 19px;
                 font-weight: 600;

                 color: black;
                 padding: 7px 15px;

                 transition: .6s;
                 text-decoration: none;
                 border: 1px solid transparent;
                 
                 :hover {
                     transition: .6s;
                    border: 1px solid black;
                    border-radius: 20px ;
                    }
             }
        }
    }
     
    }
   .btn-bars {
    display: block;
    transition: .3s;
       
    .btn-menu {
        font-size: 25px;
        background-color: transparent !important;
         padding: 0;
         outline: none;
        border: none;
        display: block;
    }
   }
}

`