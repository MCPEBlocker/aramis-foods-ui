import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function User(props) {
    return (
        <tr className="row">
            <td className="col">{props.user.id}</td>
            <td className="col">{props.user.date}</td>
            <td className="col">{props.user.phone}</td>
            <td className="col">{props.user.balance}</td>
            <td className="col">{props.user.bonuses}</td>
            <td className="col" style={{ textTransform: "capitalize" }}>{props.user.language}</td>
            <td className="col-1"><span className={`msg alert-${props.user.status === "active" ? "success" : (props.user.status === "unverified" ? "warning" : "danger")}`} style={{color: `${ props.user.status === "active" ? "green" : (props.user.status === "unverified" ? "orange" : "red")}`}}>{props.user.status}</span></td>
            <td className="col-3 icon">
                <a href={`/#/${props.user.id}`}><FontAwesomeIcon className="fontIcon" icon={faEdit} /></a>
                <a href={`/#/${props.user.id}`}><FontAwesomeIcon className="fontIcon" icon={faArrowRight} /></a>
            </td>
        </tr>
    );
}