package com.assignment.data.model;

public class Chart {

	private String name;
	private int liklihood;
	private int intensity;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getLiklihood() {
		return liklihood;
	}

	public void setLiklihood(int liklihood) {
		this.liklihood = liklihood;
	}

	public int getIntensity() {
		return intensity;
	}

	public void setIntensity(int intensity) {
		this.intensity = intensity;
	}

	public Chart() {
		super();
	}

	public Chart(String name, int liklihood, int intensity) {
		super();
		this.name = name;
		this.liklihood = liklihood;
		this.intensity = intensity;
	}

	@Override
	public String toString() {
		return "Chart [name=" + name + ", liklihood=" + liklihood + ", intensity=" + intensity + "]";
	}

}
