import { useEffect } from 'react';

export const useDisableBodyScroll = (open) => {
    useEffect(() => {
        if (open) {
            document.body.style.paddingRight = `${scrollbarWidth()}px`;
            document.body.style.overflow = 'hidden';
            
        } else {
            document.body.style.paddingRight = '0px';
            document.body.style.overflow = 'unset';
        }
    }, [open]);
};

const scrollbarWidth = () => {
	document.body.style.overflow = 'hidden';
	let width = document.body.clientWidth;
	document.body.style.overflow = 'scroll';
 
	width -= document.body.clientWidth;
 
	if(!width) width = document.body.offsetWidth-document.body.clientWidth;
 
	document.body.style.overflow = '';
 
	return width;
}
