import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  tags: any;
  tagTitle: string;

  // Status of modal
  openedModal = false;

  @ViewChild("tagSlides") tagSlides: IonSlides;
  slideOptions = {
    loop: false,
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    // coverflowEffect: {
    //   rotate: 0,
    //   stretch: 0,
    //   depth: 250,
    //   modifier: 1.93,
    //   slideShadows: false
    // }
  };

  constructor() {}

  /**
   *
   */
  async ngOnInit() {
    this.tags = [
      {
        title: "James 1",
        image:
          "https://images.unsplash.com/photo-1554490783-82bac5dfc351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      },
      {
        title: "James 2",
        image:
          "https://images.unsplash.com/photo-1554619988-1a34110f9e90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      },
    ];
  }

  /**
   *
   * @param res
   */
  goRecipePage(res) {
    return;
  }
}
