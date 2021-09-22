import styled from 'styled-components'
export const FooterWrap = styled.div`
background-color: darkslategrey;
padding: 60px 5px 20px;
    text-align: center;

.footerjs {
    .lines {
        margin: 20px auto;
        height: 1px;
        background-color: silver;

    }
    .social-media-icons{
        display: flex;
        align-items: center;
        justify-content:center;

        padding-bottom: 20px;
        a{
            text-decoration: none;
            color: black;
            /* margin: 10px; */
        }
        .icons {
            display: flex;
            align-items: center;
            justify-content:center;

            background-color: white;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 22px;
            transition: .4s;

            :hover {
            color: yellow;
            background-color: black;
            border-radius: 30%;
            transition: .4s;
            transform: scale(1.2);
            font-size: 26px;
            }
        }
    }

}
@media (max-width: 600px){
    a{
        padding: 5px !important;
    }
}

`
