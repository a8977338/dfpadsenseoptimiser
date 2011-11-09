---
layout: "book"
title: "Optimizing Google AdSense"
permalink: "/book/"
abstract: "some abstract about the book"
---
## Optimizing Google AdSense

{% for post in site.posts reversed %}
  {% if post.layout == 'book' %}
### {{ post.title }}

{{ post.abstract }} [read more](/dfpadsenseoptimiser{{ post.url }} "{{ post.title }}")

  {% endif %}
{% endfor %}

..
