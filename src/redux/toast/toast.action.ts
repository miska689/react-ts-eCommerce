import {showToast} from "@/redux/toast/toast.slice.ts";

export const toast = {
	success: (message: string) => showToast({message, severity: 'success'}),
	warning: (message: string) => showToast({message, severity: 'warning'}),
	error: (message: string) => showToast({message, severity: 'error'}),
	info: (message: string) => showToast({message, severity: 'info'}),
}
