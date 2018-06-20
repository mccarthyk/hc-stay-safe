# hc-stay-safe

> A Vue.js project

## Installation

```html
<div id="staySafe">

  <!-- Place components here -->

</div>

<script src="https://commbocc.github.io/hc-stay-safe/dist/build.js"></script>
```

## Components

### Operational status

```html
<div id="staySafe">
  ...

  <!-- Operational Status -->
  <div is="OperationalStatus" storms="None" evac-levels="None at this time" eoc-status="Monitoring"></div>

  ...
</div>
```

### Sandbags

```html
<div id="staySafe">
  ...

  <!-- Sandbags -->
  <div is="Sandbags" title="Sandbag Locations" header-class=""></div>

  ...
</div>
```

#### Example Sandbag Spreadsheet Entry

[Google Spreadsheet](https://docs.google.com/spreadsheets/d/14c7p2JUfuRTC9JcbvG--pOu6IRtVuMZ7Flkv0EZ54Io/edit#gid=1066978540)

| Location | Address | Start Date | Start Time | End Date | End Time | Info | Link |
| -- | -- | -- | -- | -- | -- | -- | -- |
| Edward Medard Park | 6140 S Turkey Creek Rd, Plant City, FL 33567 | 2018-05-26 | 16:00 | 2018-05-26 | 19:00 | 10 per household &10 per vehicle | https://hillsboroughcounty.org/locations/edward-medard-conservation-park |

### Card List Group

The `CardListGroup` was designed to eliminate clutter in the WYSIWYG. Only `<a>` tags will render and will automatically format as [Bootstrap List Group Item Actions](https://getbootstrap.com/docs/4.1/components/list-group/#links-and-buttons)

```html
<div id="staySafe">
  ...

  <div is="CardListGroup" title="Weather Updates" header-class="bg-info text-white">
    <a href="http://www.weather.gov/" target="_blank">National Weather Service</a>
    <a href="http://www.nhc.noaa.gov/" target="_blank">National Hurricane Center</a>
    <a href="http://radar.weather.gov/radar.php?rid=tbw&amp;product=N0R&amp;overlay=11101111&amp;loop=yes" target="_blank">Local Doppler Radar</a>
    <a href="http://forecast.weather.gov/MapClick.php?zoneid=FLZ051" target="_blank">Local Weather Forecast</a>
  </div>

  ...
</div>
```

### HCFL Alert

```html
<div id="staySafe">
  ...

  <!-- HcflAlert -->
  <div is="HcflAlert">
    <p>
      HCFL Alert is Hillsborough County’s official mass notification system. HCFL Alert is designed to keep you informed about emergencies and certain non-emergency events in Hillsborough County.
    </p>
  </div>

  ...
</div>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
