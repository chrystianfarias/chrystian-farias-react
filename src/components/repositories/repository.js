import styled from "styled-components";

const RepoItem = styled.div`
    display: flex;
    padding: 10px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    border: 2px solid transparent;
    gap: 5px;
    cursor: pointer;
    span{
        opacity: .4;
        font-weight: 100;
        font-size: 12px;
    }
    :hover {
        border: 2px solid #fff;
    }
    z-index: 2;
    transition: all ease-out .2s;
`;

const Repository = ({repo}) => {
    const handleClickRepo = (repo) => {
        window.location = repo.html_url;
    }
    return <RepoItem onClick={e => handleClickRepo(repo)}>
            <p>
                {repo.name}
            </p>
            <span>
                {repo.description}
            </span>
        </RepoItem>
};
export default Repository;