export type IEventCard = {
    id: string;
    title: string;
    description: string;
    eventDate: string;
    time: string;
    image: string;
    location: string;
    category: string;
    price: number;
    eventSeats: number;
    contactEmail: string;
    contactPhone: string;
    registrationDeadline: string;

    isFeatured: boolean;
    isFree: boolean;
    istrending: boolean;

    organizer: string;
    termsAndConditions: string[]
}