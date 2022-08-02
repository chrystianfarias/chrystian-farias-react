import styled from "styled-components";
import {BsInstagram, BsFacebook, BsYoutube, BsLinkedin, BsTwitter} from "react-icons/bs";

const Container = styled.div`
    display: flex;
    max-width: 400px;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;
const Button = styled.div`
    padding: 10px;
    display: flex;
    gap: 5px;
    font-size: 12px;
    cursor: pointer;
    :hover {
        color: ${props => props.hover};
    }
    z-index: 2;
    transition: all ease-out .2s;
`;
const SocialMedias = () => {
    const handleLink = (url) => {
        window.location = url;
    }
    return <Container>
        <Button hover="#F77737" onClick={e => handleLink("http://instagram.com/chrystian.farias/")}>
            <BsInstagram/>
            Instagram
        </Button>
        <Button hover="#4267B2" onClick={e => handleLink("https://www.facebook.com/chrystian.farias.33/")}>
            <BsFacebook/>
            Facebook
        </Button>
        <Button hover="#1DA1F2" onClick={e => handleLink("https://twitter.com/chrysfarias14")}>
            <BsTwitter/>
            Twitter
        </Button>
        <Button hover="#0E76A8" onClick={e => handleLink("https://www.linkedin.com/in/chrystian-farias/")}>
            <BsLinkedin/>
            LinkedIn
        </Button>
        <Button hover="#FF0000" onClick={e => handleLink("https://youtube.com/chrystianfarias/")}>
            <BsYoutube/>
            YouTube
        </Button>
    </Container>
};
export default SocialMedias;