// Purpose: Utility functions for fetching images.
export async function imageFetchToFile(url: string): Promise<File> {
	const response = await fetch(url);
	const blob = await response.blob();
	const fileName = url.split('/').pop() || 'downloaded_image';
	return new File([blob], fileName, { type: 'image/jpeg' });
}
