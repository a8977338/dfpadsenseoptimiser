---
layout: "blog"
title: "Optimizing Google AdSense"
permalink: "/blog/"
abstract: "some abstract about the blog"
---
## Optimizing Google AdSense

{% for post in site.posts reversed %}
  {% if post.category == 'blog' %}
### {{ post.title }}

{{ post.abstract }}

[read more](/dfpadsenseoptimiser{{ post.url }} "{{ post.title }}")

  {% endif %}
{% endfor %}

..
