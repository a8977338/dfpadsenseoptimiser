---
layout: "scenario"
title: "Optimizing AdSense - The Scenarios"
permalink: "/scenarios/"
abstract: "some abstract about the scenrarios"
---
## Optimizing AdSense - The Scenarios

{% for post in site.posts reversed %}
  {% if post.layout == 'scenario' %}
### {{ post.title }}

{{ post.abstract }} [read more]({{ post.url }} "{{ post.title }}")

  {% endif %}
{% endfor %}

