import Header from "@/views/ui/Typography/Header";

export default () => (
  <main className="styleguide container fluid">
    <section className="section">
      <Header Element="h1" size="900">The Grid</Header>

      <h2>Responsive</h2>
      <p>Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths.</p>
      <div className="row">
        <div className="col-xs-12 col-sm-3 col-md-2 col-lg-1">
          <div className="element"></div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-8 col-lg-10">
          <div className="element"></div>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-2 col-lg-1">
          <div className="element"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-3 col-md-2 col-lg-1">
          <div className="element"></div>
        </div>
        <div className="col-xs-12 col-sm-9 col-md-10 col-lg-11">
          <div className="element"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-10 col-sm-6 col-md-8 col-lg-10">
          <div className="element"></div>
        </div>
        <div className="col-xs-2 col-sm-6 col-md-4 col-lg-2">
          <div className="element"></div>
        </div>
      </div>
    </section>

    <section className="section">
      <h2>Fluid</h2>
      <p>Percent based widths allow fluid resizing of columns and rows.</p>
      <div className="row">
        <div className="col-xs-12">
          <div className="element"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-1">
          <div className="element"></div>
        </div>
        <div className="col-xs-11">
          <div className="element"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2">
          <div className="element"></div>
        </div>
        <div className="col-xs-10">
          <div className="element"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-3">
          <div className="element"></div>
        </div>
        <div className="col-xs-9">
          <div className="element"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4">
          <div className="element"></div>
        </div>
        <div className="col-xs-8">
          <div className="element"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-5">
          <div className="element"></div>
        </div>
        <div className="col-xs-7">
          <div className="element"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6">
          <div className="element"></div>
        </div>
        <div className="col-xs-6">
          <div className="element"></div>
        </div>
      </div>
    </section>

    <section className="section">
      <h2>Simple Syntax</h2>
      <p>All you need to remember is row, column, content.</p>
    </section>

    <section className="section">
      <h2>Offsets</h2>
      <p>Offset a column</p>
      <div className="row">
        <div className="col-xs-offset-11 col-xs-1">
          <div className="element"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-10 col-xs-2">
          <div className="element"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-9 col-xs-3">
          <div className="element"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-8 col-xs-4">
          <div className="element"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-7 col-xs-5">
          <div className="element"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-6 col-xs-6">
          <div className="element"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-5 col-xs-7">
          <div className="element"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-4 col-xs-8">
          <div className="element"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-3 col-xs-9">
          <div className="element"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-10">
          <div className="element"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-1 col-xs-11">
          <div className="element"></div>
        </div>
      </div>
    </section>

    <section className="section">
      <h2>Auto Width</h2>
      <p>Add any number of auto sizing columns to a row. Let the grid figure it out.</p>
      <div className="row">
        <div className="col-xs">
          <div className="element"></div>
        </div>
        <div className="col-xs">
          <div className="element"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs">
          <div className="element"></div>
        </div>
        <div className="col-xs">
          <div className="element"></div>
        </div>
        <div className="col-xs">
          <div className="element"></div>
        </div>
      </div>
    </section>

    <section className="section">
      <h2>Nested Grids</h2>
      <p>Nest grids inside grids inside grids.</p>
      <div className="row">
        <div className="col-xs-7">
          <div className="element content">
            <div className="row">
              <div className="col-xs-9">
                <div className="element first content">
                  <div className="row">
                    <div className="col-xs-4">
                      <div className="element"></div>
                    </div>
                    <div className="col-xs-8">
                      <div className="element"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-3">
                <div className="element first content">
                  <div className="row">
                    <div className="col-xs">
                      <div className="element"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-5">
          <div className="element content">
            <div className="row">
              <div className="col-xs-12">
                <div className="element first content">
                  <div className="row">
                    <div className="col-xs-6">
                      <div className="element"></div>
                    </div>
                    <div className="col-xs-6">
                      <div className="element"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <h2>Alignment</h2>
      <p>Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column</p>
      <h3>.start-</h3>
      <div className="row">
        <div className="col-xs-12">
          <div className="element content">
            <div className="row start-xs">
              <div className="col-xs-6">
                <div className="element"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>.center-</h3>
      <div className="row">
        <div className="col-xs-12">
          <div className="element content">
            <div className="row center-xs">
              <div className="col-xs-6">
                <div className="element"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>.end-</h3>
      <div className="row">
        <div className="col-xs-12">
          <div className="element content">
            <div className="row end-xs">
              <div className="col-xs-6">
                <div className="element"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p>Here is an example of using the modifiers in conjunction to acheive different alignment at different viewport sizes.</p>
      <div className="row">
        <div className="col-xs-12">
          <div className="element content">
            <div className="row center-xs end-sm start-lg">
              <div className="col-xs-6">
                <div className="element"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>.top-</h3>
      <div className="row top-xs">
        <div className="col-xs-6">
          <div className="element large"></div>
        </div>
        <div className="col-xs-6">
          <div className="element"></div>
        </div>
      </div>

      <h3>.middle-</h3>
      <div className="row middle-xs">
        <div className="col-xs-6">
          <div className="element large"></div>
        </div>
        <div className="col-xs-6">
          <div className="element"></div>
        </div>
      </div>

      <h3>.bottom-</h3>
      <div className="row bottom-xs">
        <div className="col-xs-6">
          <div className="element large"></div>
        </div>
        <div className="col-xs-6">
          <div className="element"></div>
        </div>
      </div>
    </section>

    <section className="section">
      <h2>Distribution</h2>
      <p>Add classes to distribute the contents of a row or column.</p>
      <h3>.around-</h3>
      <div className="row">
        <div className="col-xs-12">
          <div className="element content">
            <div className="row around-xs">
              <div className="col-xs-2">
                <div className="element"></div>
              </div>
              <div className="col-xs-2">
                <div className="element"></div>
              </div>
              <div className="col-xs-2">
                <div className="element"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>.between-</h3>
      <div className="row">
        <div className="col-xs-12">
          <div className="element content">
            <div className="row between-xs">
              <div className="col-xs-2">
                <div className="element"></div>
              </div>
              <div className="col-xs-2">
                <div className="element"></div>
              </div>
              <div className="col-xs-2">
                <div className="element"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <h2>Reordering</h2>
      <p>Add classes to reorder columns.</p>
      <h3>.first-</h3>
      <div className="row">
        <div className="col-xs-12">
          <div className="element content">
            <div className="row">
              <div className="col-xs-2">
                <div className="element first">1</div>
              </div>
              <div className="col-xs-2">
                <div className="element first">2</div>
              </div>
              <div className="col-xs-2">
                <div className="element first">3</div>
              </div>
              <div className="col-xs-2">
                <div className="element first">4</div>
              </div>
              <div className="col-xs-2">
                <div className="element first">5</div>
              </div>
              <div className="col-xs-2 first-xs">
                <div className="element">6</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>.last-</h3>
      <div className="row">
        <div className="col-xs-12">
          <div className="element content">
            <div className="row">
              <div className="col-xs-2 last-xs">
                <div className="element">1</div>
              </div>
              <div className="col-xs-2">
                <div className="element first">2</div>
              </div>
              <div className="col-xs-2">
                <div className="element first">3</div>
              </div>
              <div className="col-xs-2">
                <div className="element first">4</div>
              </div>
              <div className="col-xs-2">
                <div className="element first">5</div>
              </div>
              <div className="col-xs-2">
                <div className="element first">6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <h2>Reversing</h2>
      <h3>.reverse</h3>
      <div className="row">
        <div className="col-xs-12">
          <div className="element content">
            <div className="row reverse">
              <div className="col-xs-2">
                <div className="element">1</div>
              </div>
              <div className="col-xs-2">
                <div className="element">2</div>
              </div>
              <div className="col-xs-2">
                <div className="element">3</div>
              </div>
              <div className="col-xs-2">
                <div className="element">4</div>
              </div>
              <div className="col-xs-2">
                <div className="element">5</div>
              </div>
              <div className="col-xs-2">
                <div className="element">6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
)