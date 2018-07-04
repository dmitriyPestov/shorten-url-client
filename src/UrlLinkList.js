import React from 'react';
import UrlLink from './UrlLink';

export default function UrlLinkList({listUrls, updateUrlsList}) {
    let urlLinkElements = listUrls.map((url) =>
        <li key={url._id}>
            <UrlLink urlData={url} updateUrlsList={updateUrlsList}/>
        </li>
    );
    return (
        <ul>
            {urlLinkElements}
        </ul>
    )
}