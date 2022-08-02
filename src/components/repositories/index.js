import { useEffect, useState } from "react";
import styled from "styled-components";
import github from "../../services/github";
import Repository from "./repository";
import {BsGithub} from "react-icons/bs";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    max-height: 300px;
    height: 100%;
    width: 100%;
    gap: 10px;
`;
const List = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    border-top: 2px solid #fff;
`;
const Title = styled.div`
    display: flex;
    gap: 5px;
    span {
        opacity: .3;
    }
    :hover {
        color: #6cc644;
    }
    z-index: 2;
    cursor: pointer;
    transition: all ease-out .2s;
`;
const Repositories = () => {
    const [repos, setRepos] = useState([]);
    const getRepos = async () => {
        const {data} = await github.get("/users/chrystianfarias/repos");
        setRepos(data.sort((a, b)=>(a.stargazers_count < b.stargazers_count)));
    };
    useEffect(() => {
        getRepos();
    }, []);
    return <Container>
        <Title>
            <BsGithub/>
            GitHub
            <span>
                Repositories
            </span>
        </Title>
        <List>
            {repos.map(repo => <Repository repo={repo}/>)}
        </List>
        </Container>
};
export default Repositories;