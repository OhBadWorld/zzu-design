const showToast = (options: any) => {
    console.log(options);
};

let toast: any = null;
let pendingCount = 0;
export function incPendingRequest(options: any) {
    if (pendingCount === 0) {
        toast = showToast(options);
    }
    pendingCount += 1;
}

export function decPendingRequest() {
    if (pendingCount > 0) {
        pendingCount -= 1;
        if (pendingCount === 0 && toast) {
            toast.close();
        }
    }
}
