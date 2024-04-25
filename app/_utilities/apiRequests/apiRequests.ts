import { ProductsSlice, ProductData } from "../dbRequests/dbRequests";

export async function apiGetProductsSlice (page: number, category?: string) {
    const queryParams = new URLSearchParams;
    queryParams.set('page', page.toString());
    if (category) queryParams.set('category', category);

    const response = await fetch(`/api/products/slice?${queryParams.toString()}`);
    if (!response.ok) {
        throw new Error("An error occurred. Can't get products data.");
    }
    const productsSelectionData = await response.json();

    return productsSelectionData as ProductsSlice;
}

export async function apiGetProduct (id: number) {
    const response = await fetch(`/api/products/item?id=${id}`);
    if (!response.ok) {
        throw new Error("An error occurred. Can't get products data.");
    }
    const product = await response.json();

    return product as ProductData|null;
}

// export async function deleteEvent (eventIdentifier: {eventId: number, imageFileName: string|null} ) {
//     const response = await fetch('/api/events', {
//         method: "DELETE",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(eventIdentifier)
//     });
//     if (!response.ok) {
//         throw new Error("An error occurred. Can't delete event.");
//     }
//     return true;
// }

// export async function addEvent (formData: FormData) {
//     const response = await fetch('/api/events', {
//         method: "POST",
//         // headers: {"Content-Type": "multipart/form-data"}; boundary=MyBoundaryString,
//         body: formData,
//     });
//     if (!response.ok) {
//         const responseData = await response.json();
//         throw new Error(responseData.error);
//     }
//     return true;
// }

// export async function updateEvent (formData: FormData) {
//     const response = await fetch('/api/events', {
//         method: "PATCH",
//         // headers: {"Content-Type": "multipart/form-data"}; boundary=MyBoundaryString,
//         body: formData,
//     });
//     if (!response.ok) {
//         throw new Error("An error occurred. Can't update event.");
//     }
//     return true;
// }