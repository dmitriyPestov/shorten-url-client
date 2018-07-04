import React from 'react';
import UrlLink from '../UrlLink/UrlLink';

export default function UrlLinkList({listUrls, updateUrlsList}) {
    const urlLinkElements = listUrls.map((url) =>
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