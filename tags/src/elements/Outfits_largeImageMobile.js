import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_largeImageMobile(payload, attrs) {
	if (payload.action === window.nord.core.actions.SwipeGalleryZoomModalShow) {
		cmCreateElementTag('Large Image', 'Outfit Page', attrs);
		spCreateElementTag('Large Image', 'Outfit Page', attrs);
	}
}