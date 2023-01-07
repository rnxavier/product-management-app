import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})

export class StarComponent implements OnChanges{
    cropWidth: number = 100;
    //Input passes information from parent to child component
    @Input() rating: number = 0;
    starIcon = faStar;
    //Child component passes information to parent by emitting an event
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();


    onClick(): void {
        this.ratingClicked.emit((`The rating ${this.rating} was clicked`))
    }

    ngOnChanges(): void {
        this.cropWidth = this.rating * 100/5 
    }
}



