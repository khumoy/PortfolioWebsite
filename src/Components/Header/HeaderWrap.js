import styled from 'styled-components'
export const HeaderWrap = styled.div`
position: relative;
.scroll-active {
        /* background-color: white !important; */
        backdrop-filter: blur(5px);
        transition: .4s;
        
        .btn-menu {
            color: black !important;
        }
        img{
            filter: drop-shadow(0 0 2px black)!important;
        }
        a {
            color: black !important;
            :hover {
                color: white !important ;
            }
        }
    }
  
.header {
    /* padding: 10px 30px; */
    display: flex;
    justify-content: space-between;
    align-items:center;

    
    background-color: transparent;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 400;
    transition: .4s;

    img{
        width: 150px;
        filter: drop-shadow(0 0 2px white)
    }
    
    .header-right{
        backdrop-filter: blur(6px);
        ul {
        list-style-type: none;
        display: none ; 
        justify-content: space-between;
        align-items:center;
        transition: .5s;
        li {
            /* padding-right: 25px; */
            margin-top: 15px;
            margin-right: 5px;

             a { 
                 font-size: 19px;
                 font-weight: 600;

                 color: black;
                 padding: 7px 15px;
                 border-radius: 20px;
                 transition: .6s;
                 text-decoration: none;
                 border: 2px solid transparent;
                 
                 :hover {
                    background-color: black;    
                    transition: .6s;
                    color: white;
                    border: 2px solid black;
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
        color: black;
        font-size: 25px;
        backdrop-filter: blur(5px);
        background-color: transparent !important;
         padding: 5px;
         margin: 10px 15px ;
         outline: none;
        border: none;
        display: block;
    }
   }
   .show {
            top: 0 !important;
        transition: .5s;

        }
   .navbar-menu {
        width: 100%;
        height: 300px;
        position: absolute;
        background-color: white;
        top: -300px;
        right: 0;
        text-align: center;
        transition: .5s;

       
        ul {
            list-style-type: none;
            padding: 20px 0;

            a{
                 display: inline-block;
                 font-size: 19px;
                 font-weight: 600;
                 color: black;
                 margin-top: 5px;
                 transition: .6s;
                 text-decoration: none;
                 border-radius: 20px ;
                 border: 2px solid transparent;
                 line-height: 30px;
                 :hover {
                    background-color: black;
                    color: white;
                    transition: .6s;
                    border: 2px solid black;
                    border-radius: 20px ;
                    }
            }
        }

        .btn-closer {
            font-size: 23px;
            position: absolute;
            top: 20px;
            right: 20px;

            border: none;
            background-color: transparent;
            outline: none;
           
        }
    }
}

`