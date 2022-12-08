export default {
    name: 'Lightbox',

    emits: ['closelb'],

    props: ['value'],


    template: 
    ` <!-- <pre>{{ value }}</pre> -->
    <div class="tabs-wrapper">   
    <div class="tabs">
      <input type="radio" name="tab" id="tab1" checked="checked">
      <label for="tab1">PRICE</label>
      <input type="radio" name="tab" id="tab2">
      <label for="tab2">BUILD</label>
      <input type="radio" name="tab" id="tab3">
      <label for="tab3">COMPARE</label>
    
      <div class="tab-content-wrapper">
        <section id="tab-content-1" class="tab-content"><!--Price-->
            <section><!-- module car -->
              <div class="module-car">
                  <div class="three-door">
                  <img :src='"images/"+ value.image' alt="" class="car">
                      <h3>{{value.name}}</h3>
                      <h4>{{value.subtitle}}</h4>
                  </div>
              </div>
          </section>
          <!-- module offers -->
            <div class="offers">
              <h3>OFFERS</h3>
              <hr class="line">
              <div class="offer-wrapper">
                <div class="offer1">
                  <p class="bold">Rate Starting from</p>
                  <div class="numbers">
                    <p class="numbers1">{{value.pricerate}}</p>
                    <p class="bold">APR*</p>
                  </div>
                  <p class="regular">48 Months</p>
                </div>
                <div class="offer2">
                    <p class="bold">Monthly Payment Starting from</p>
                    <div class="numbers">
                      <p class="numbers1">{{value.pricemonthly}}</p>
                      <p class="bold">**</p>
                    </div>
                    <p class="regular">Incl. Freight & PDI</p>
                </div>
              </div>
            </div>
        </section><!--Price-->
        <section id="tab-content-2" class="tab-content"><!--Build-->
            <section><!-- module car -->
              <div class="module-car">
                  <div class="three-door">
                  <img :src='"images/"+ value.image' alt="" class="car">
                      <h3>{{value.name}}</h3>
                      <h4>{{value.subtitle}}</h4>
                  </div>
              </div>
          </section>
          <section><!-- module Information -->
            <div class="build">
              <div class="offers">
                <h3>Engine Architecture</h3>
                <hr class="line">
                <div class="offer-wrapper">
                  <div class="offer1">
                    <p class="bold">{{value.engine}}</p>
                  </div>
                </div>
              </div>
              <div class="offers">
                <h3>Output (rpm)</h3>
                <hr class="line">
                <div class="offer-wrapper">
                  <div class="offer1">
                    <p class="bold">{{value.output}}</p>
                  </div>
                </div>
              </div>
              <div class="offers">
                <h3>Bore and Stroke (mm)</h3>
                <hr class="line">
                <div class="offer-wrapper">
                  <div class="offer1">
                    <p class="bold">{{value.boreandstroke}}</p>
                  </div>
                </div>
              </div>
              <div class="offers">
                <h3>0-100km/hr (s)</h3>
                <hr class="line">
                <div class="offer-wrapper">
                  <div class="offer1">
                    <p class="bold">{{value.km}}</p>
                  </div>
                </div>
              </div>
              <div class="offers">
                <h3>Transmission</h3>
                <hr class="line">
                <div class="offer-wrapper">
                  <div class="offer1">
                    <p class="bold">{{value.transmission}}</p>
                  </div>
                </div>
              </div>
              <div class="offers">
              <h3>Compression Ratio</h3>
              <hr class="line">
              <div class="offer-wrapper">
                <div class="offer1">
                  <p class="bold">{{value.compressionratio}}</p>
                </div>
              </div>
             </div>
              <div class="offers">
                <h3>Displacement (cm³)</h3>
                <hr class="line">
                <div class="offer-wrapper">
                  <div class="offer1">
                    <p class="bold">{{value.displacement}}</p>
                  </div>
                </div>
              </div>
            </div>
          </section><!-- module Information -->
        </section><!--Build-->
        <section id="tab-content-3" class="tab-content"><!--Compare-->
          <div class="compare">
          <img src="images/3door-compare-desktop.svg" alt="Cooper" class="img-compare">
          </div>
        </section><!--Compare-->
      </div>
     </div>
   </div> 
    `,
    methods: {
        closeLB() {
            this.$emit('closelb');
        }
    }
    
}