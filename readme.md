# enter-the-void.js by OKFocus

enter-the-void.js is a highly customizable jQuery plugin that allows for animation of typogragphy styles on the web.

### Requirements

enter-the-void.js depends on jQuery (> v1.4).

### Usage

enter-the-void.js should be bound to elements that contains type (headers, paragraphs, spans, etc).

Apply enter-the-void.js to an element on your webpage like so, within a ```<script>``` tag:

``` js
  $(document).ready(function(){
      $('h1').oktype();  
  });
```

When you hover on an `<h1>`, you'll now see the enter-the-void.js changing the type style. To make a more interesting animation, add an option or two:

``` js
  $(document).ready(function(){
      $('h1').oktype({
               randomColor: true,
               randomDecoration: true
             });
  });
```

### Options

The following options are available to you:

<table>
  <tr>
    <th>option</th>
		<th>description</th>
		<th>default</th>
	</tr>
  <tr>
    <td>weight</td>
		<td>alternates the font weight by toggling or selecting at random (a string – ‘toggle’ or ‘random’)</td>
		<td>null</td>
	</tr>
  <tr>
    <td>minSize</td>
		<td>the minimum desired size for the type (an int)</td>
		<td>null</td>
	</tr>
  <tr>
    <td>maxSize</td>
		<td>the maximum desired size for the type (an int)</td>
		<td>null</td>
	</tr>
  <tr>
    <td>randomColor</td>
		<td>randomizes type color (a boolean)</td>
		<td>false</td>
	</tr>
  <tr>
    <td>randomDecoration</td>
		<td>Random from array of text-decoration rules (a boolean)</td>
		<td>false</td>
	</tr>
  <tr>
    <td>interval</td>
		<td>the speed of our animation in milliseconds (an int)</td>
		<td>100</td>
	</tr>
  <tr>
    <td>toggleCase</td>
		<td>randomizes capitalization and lowercase of type (a boolean)</td>
		<td>false</td>
	</tr>
  <tr>
    <td>minSpace</td>
		<td>the maximum desired letter-spacing for type (an int)</td>
		<td>null</td>
	</tr>
  <tr>
    <td>maxSpace</td>
		<td>the minimum desired letter-spacing for type (an int)</td>
		<td>null</td>
	</tr>
  <tr>
    <td>restore</td>
		<td>restore the element to its prior state when not hovering (a boolean)</td>
		<td>true</td>
	</tr>
  <tr>
    <td>hover</td>
		<td>execute animation on hover, otherwise always animate (a boolean)</td>
		<td>true</td>
	</tr>
</table>
  
### Run Tests

OKFocus tests JavaScript with Jasmine. After cloning this repo simply run:

```
$ bundle install
$ rake jasmine
```
