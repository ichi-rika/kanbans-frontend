import styled from 'styled-components';
import { sans } from '../fonts';

const NavItem = styled.button`
    display: flex;
    height: 100%;
    border: none;
    color: white;
    margin: 0;
    padding: 6px 12px;
    box-sizing: border-box;
    ${sans}
    font-size: 1rem;
    text-decoration: inherit;
    cursor: ${({ noPointer }) =>
        noPointer ? 'default' : 'pointer'};
    align-items: center;
    justify-content: center;
    text-shadow: 1px 1px rgba(0,0,0,0.1);

    background-color: ${({ expanded }) =>
        expanded ? '#673ab7' : '#512da8'};
    box-shadow: ${({ expanded }) =>
        expanded ? '0px 0px 2px 4px rgba(0,0,0,0.2)' : 'none'};

    transition: box-shadow ease 0.2s,
                background-color ease 0.2s;

    &:hover {
        background-color: #6f40c2;
        box-shadow: 0px 0px 2px 4px rgba(0,0,0,0.2);
        /* The shadow won't get hidden by the surrounding items */
        z-index: 3;
    }

    &.nav-active {
        border-bottom: 3px solid #df8dc7;
        color: #efc0ea;
    }
`;

export default NavItem;
