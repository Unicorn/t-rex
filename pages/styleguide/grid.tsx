import Header from "@/views/ui/Typography/Header";

export default () => (
  <main className="styleguide">
    <section>
      <Header Element="h1" size="900">The Grid</Header>
      <p>
        The neue grid is highly opinionated and may go against other design paradigms you have seen.
        Many grid systems seem to have a preference of even numbers, and developers love even numbers because it's easy math.
        But nature, artists, and designers alike will tell you the Golden Rule is better.
        Fibonacci based sizing generally makes for better design and layout, and what's the point of using Neue if not for good UI and better design practices?
      </p>

      <p>
        Getting started is simple. There are both React Components to help you with the Grid and CSS classes that use a naming system that's pretty easy to learn:
      </p>

      <dl>
        <dt>Rows</dt>
        <dd><code>.row</code> Defines a new row with columns</dd>

        <dt>Columns</dt>
        <dd>
          <code>.col-xs</code> Defines a column within a row where <em>xs</em> corresponds with the <em>$breakpoints</em> scss variable.
          This goes from small up to large, so if you define the smallest setting, it will inherit that width up through the breakpoints, until another class is found.
          e.g.: <em>.xs-5 .sm-8 .md-13 .lg-21</em> would stretch from 5 to 21 grid spaces wide, at breakpoints: <em>&gt;0px, &gt;400px, &gt;768px, &gt;1024px.</em>
        </dd>

        <dt>Modifiers</dt>
        <dd>
          <code>.middle-xs</code>, <code>.reverse</code>, and many other modifiers exist on row and column elements.
          These modifiers make sorting and alignment a breeze and almost all of them can be constrained by different breakpoints.
        </dd>
      </dl>
    </section>

    <section className="row between-xs bottom-xs">
      <div className="col-xs-21 col-lg-8">
        <h2>Responsive and Fluid</h2>
        <p>
          Percent based widths allow fluid resizing of columns and rows.
          By default this uses a 21 column grid based on a Fibonacci Sequence for ideal columns of: <em>1, 2, 3, 5, 8, 13 column widths</em>.
          Resize the page and you'll see the breakpoints in action.
        </p>
        <p>
          The grid also supports responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at <code>xs</code>, <code>sm</code>, <code>md</code> & <code>lg</code> viewport widths.
        </p>
      </div>

      <div className="preview col-xs-21 col-lg-12">
        <div className="row">
          <div className="col-xs-21">
            <div className="element"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-20 col-md-1">
            <div className="element"></div>
          </div>
          <div className="col-xs-1 col-md-20">
            <div className="element"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-19 col-md-2">
            <div className="element"></div>
          </div>
          <div className="col-xs-2 col-md-19">
            <div className="element"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-18 col-md-3">
            <div className="element"></div>
          </div>
          <div className="col-xs-3 col-md-18">
            <div className="element"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-16 col-md-5">
            <div className="element"></div>
          </div>
          <div className="col-xs-5 col-md-16">
            <div className="element"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-13 col-md-8">
            <div className="element"></div>
          </div>
          <div className="col-xs-8 col-md-13">
            <div className="element"></div>
          </div>
        </div>
      </div>
    </section>

    <section className="row between-xs bottom-xs">
      <div className="col-xs-21 col-lg-12">
        <h2>Offset or Auto</h2>
        <p>
          <em>Take total control of your layout</em> with <code>.offset-x</code>, giving you additional control over how far apart to space your columns.
        </p>
        <p>
          <em>Or let the grid do all the work</em> with <code>.col-xs</code> which simply lets the grid auto flex each column as space allows. This can be used as a default class and mixed with other fixed or grid-space sized columns.
        </p>
        <p>
          <em>Nest your heart out.</em> Though a word too the wise: more than a couple nests deep can be smelly code.
        </p>
      </div>

      <div className="preview col-xs-21 col-lg-8">
        <div className="row">
          <div className="col-xs-1">
            <div className="element"></div>
          </div>
          <div className="col-xs-offset-1 col-xs-3">
            <div className="element"></div>
          </div>
          <div className="col-xs-offset-2 col-xs-5">
            <div className="element"></div>
          </div>
          <div className="col-xs-offset-3 col-xs-6">
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

        <div className="row">
          <div className="col-xs-8">
            <div className="element content">
              <div className="row">
                <div className="col-xs-8">
                  <div className="row">
                    <div className="col-xs-8">
                      <div className="element"></div>
                    </div>
                    <div className="col-xs-13">
                      <div className="element"></div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-13">
                  <div className="row">
                    <div className="col-xs">
                      <div className="element"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-13">
            <div className="element content">
              <div className="row">
                <div className="col-xs-21">
                  <div className="row">
                    <div className="col-xs-5">
                      <div className="element"></div>
                    </div>
                    <div className="col-xs-16">
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

    <section className="row between-xs bottom-xs">
      <div className="col-xs-21 col-lg-8">
        <h2>Alignment</h2>
        <p>
          Horizontally align a row with <code>.start-</code>, <code>.center-</code>, and <code>.end-</code>.{' '}
          Vertically align a column with <code>.top-</code>, <code>.middle-</code>, and <code>.bottom-</code>.{' '}
          Distribute columns with <code>.around-</code> and <code>.between-</code>.
        </p>
        <p>
          Mix and match alignments specified for various viewports. e.g.: <code>.center-xs .end-lg</code> would
          align the content to the center on mobile and right on desktop.
        </p>
      </div>

      <div className="col-xs-21 col-lg-12">
        <div className="row">
          <div className="col-xs-7">
            <div className="element content">
              <div className="row start-xs">
                <div className="col-xs-16">
                  <div className="element">.start-</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-7">
            <div className="element content">
              <div className="row center-xs">
                <div className="col-xs-16">
                  <div className="element">.center-</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-7">
            <div className="element content">
              <div className="row end-xs">
                <div className="col-xs-16">
                  <div className="element">.end-</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row top-xs around-xs">
          <div className="col-xs-6">
            <div className="row top-xs between-xs">
              <div className="col-xs-10">
                <div className="element large"></div>
              </div>
              <div className="col-xs-10">
                <div className="element"></div>
              </div>
            </div>
          </div>

          <div className="col-xs-6">
            <div className="row middle-xs between-xs">
              <div className="col-xs-10">
                <div className="element large"></div>
              </div>
              <div className="col-xs-10">
                <div className="element"></div>
              </div>
            </div>
          </div>

          <div className="col-xs-6">
            <div className="row bottom-xs between-xs">
              <div className="col-xs-10">
                <div className="element large"></div>
              </div>
              <div className="col-xs-10">
                <div className="element"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row between-xs">
          <div className="col-xs-10">
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

          <div className="col-xs-10">
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

        <div className="row">
          <div className="col-xs-21">
            <div className="element content">
              <div className="row center-xs end-lg">
                <div className="col-xs-13">
                  <div className="element">mobile: center | desktop: end</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section className="row between-xs bottom-xs">
      <div className="col-xs-21 col-lg-12">
        <h2>Reordering</h2>
        <p>
          Reverse the order of columns within a row using <code>.row.reverse</code>.
        </p>
        <p>
          Or pop any item to the front or back with <code>.row.first-xs .col-xs.first-xs</code> and <code>.row.last-xs .col-xs.last-xs</code>
        </p>
      </div>

      <div className="col-xs-21 col-lg-8">
        <div className="row">
          <div className="col-xs-21">
            <div className="element content">
              <div className="row reverse">
                <div className="col-xs">
                  <div className="element">1</div>
                </div>
                <div className="col-xs">
                  <div className="element">2</div>
                </div>
                <div className="col-xs">
                  <div className="element">3</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-21">
            <div className="element content">
              <div className="row first-xs">
                <div className="col-xs">
                  <div className="element">1</div>
                </div>
                <div className="col-xs">
                  <div className="element">2</div>
                </div>
                <div className="col-xs first-xs">
                  <div className="element">3</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-21">
            <div className="element content">
              <div className="row last-xs">
                <div className="col-xs last-xs">
                  <div className="element">1</div>
                </div>
                <div className="col-xs">
                  <div className="element">2</div>
                </div>
                <div className="col-xs">
                  <div className="element">3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main >
)