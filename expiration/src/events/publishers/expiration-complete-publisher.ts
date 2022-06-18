import { Subjects, Publisher, ExpirationCompleteEvent } from "@gntickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    readonly subject = Subjects.ExpirationComplete;
}
